import { User } from "@/models/users"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { connection } from "../../../config/data"
import { cookies } from 'next/headers'

const hashPasword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
connection()
export const createAdmin = ({ fullname, email, password }) => new Promise(async (resolve, reject) => {
    try {
        if (!fullname || !email || !password) {
            return reject({ message: -1, error: "Thiếu trường bắt buộc." });
        }
        const findEmail = await User.findOne({ email })
        if (findEmail && email === findEmail.email) {
            return reject({ message: -1, error: "Email đã tồn tại" });
        }
        const userCreate = new User({
            fullname,
            email,
            password: hashPasword(password)
        })
        const createUsers = await userCreate.save()
        const { password: _, ...userWithoutPassword } = createUsers.toObject();
        resolve({
            messenge: 0,
            data: userWithoutPassword
        })
    } catch (error) {
        reject({
            messenge: -1,
            error
        })
    }
})


export const loginAdmin = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        if (!email || !password) return reject({
            messenge: -1, error: "Vui lòng nhập đầy đủ thông tin !!!"
        })
        const login = await User.findOne({
            email
        })
        const comPassword = bcrypt.compareSync(password, login.password)
        if (!comPassword) return reject({
            messenge: -1, error: "Sai mật khẩu vui lòng nhập lại !!!"
        })
        const accessToken = jwt.sign({ _id: login._id, email: login.email }, process.env.SECRET, { expiresIn: "120s" })
        const refreshToken = jwt.sign({ email: login.email }, process.env.SECRET, { expiresIn: "7d" })
        await User.findOneAndUpdate({ email }, { token: refreshToken }, { new: true })
        const cookieStore = cookies()
        cookieStore.set('refreshToken', refreshToken, { httpOnly: true, secure: true })
        resolve({
            messenge: 0,
            token: accessToken
        })
    } catch (error) {
        reject({
            messenge: -1,
            error
        })
    }
})


export const refreshToken = () => new Promise(async (resolve, reject) => {
    try {
        const cookieStore = cookies()
        if (!cookieStore) return reject({
            error: -1,
            message: "cookies không tồn tại"
        })

        const refreshCookie = cookieStore.get('refreshToken').value
        const token = jwt.verify(refreshCookie, process.env.SECRET)
        if (!token) return reject({
            error: -1,
            message: "Refresh token không hợp lệ !!!"
        })

        const req = await User.findOne({ email: token.email, token: refreshCookie })
        if (!req) return reject({
            error: -1,
            message: "Không hợp lệ !!!"
        })

        const accessToken = jwt.sign({ _id: req._id, email: req.email }, process.env.SECRET, { expiresIn: "60s" })
        return resolve({
            messenge: 0,
            token: accessToken
        })
    } catch (error) {
        reject({
            messenge: -1,
            error
        })
    }
})



export const logout = () => new Promise(async (resolve, reject) => {
    try {
        const cookieStore = cookies();
        if (!cookieStore) return reject({
            error: -1,
            message: "Cookies không tồn tại"
        });

        const refreshToken = cookieStore.get('refreshToken');
        if (!refreshToken) return reject({
            error: -1,
            message: "Refresh token không tồn tại"
        });

        await User.findOneAndUpdate({ token: refreshToken.value }, { token: "" }, { new: true });
        cookieStore.delete('refreshToken');

        return resolve({
            message: 0,
            success: true
        });
    } catch (error) {
        return reject({
            message: -1,
            error
        });
    }
});