import { connection } from "../../../config/data"

import { Product } from "@/models/project"

export const createProject = ({ title, link, status, userId }) => new Promise(async (resolve, reject) => {
    await connection()
    try {
        const objectProject = new Product({
            title,
            link,
            status,
            userId
        })
        const create = await objectProject.save()
        return resolve({
            messenge: 0,
            data: create
        })
    } catch (error) {
        return reject({
            messenge: -1,
            error
        })
    }
})


export const showProduct = ({ userId, page = 1, limit = 6, search }) => new Promise(async (resolve, reject) => {
    try {
        if (!userId) return reject({
            error: -1,
            messange: "Admin không tồn tại !!!"
        })
        const objectSearch = {}

        if (search) {
            objectSearch.title = { $regex: search, $options: 'i' };
            console.log(objectSearch.title);
        }
        const pageInt = parseInt(page)
        const skip = (pageInt - 1) * limit

        const show = await Product.find({ userId, ...objectSearch }).skip(skip).limit(limit);
        const totalCount = await Product.countDocuments({ userId, ...objectSearch })


        return resolve({
            error: 0,
            total: totalCount,
            totalPage: Math.ceil(totalCount / limit),
            data: show,
            currentPage: pageInt
        })
    } catch (error) {
        return reject({
            messenge: -1,
            error

        })
    }
})



export const deleteProduct = ({ id, userId }) => new Promise(async (resolve, reject) => {
    try {
        const findProduct = await Product.findOne({ _id: id, userId })
        if (!findProduct) {
            return reject({
                error: -1,
                messange: "Thẻ không tồn tại !!!"
            })
        }
        await Product.findOneAndDelete({ _id: id, userId })
        return resolve({
            error: 0,
            messange: `Xoá thành công ${id}`
        })
    } catch (error) {
        return reject({
            messenge: -1,
            error
        })
    }
})


export const editProduct = ({ id, userId, title, link, status }) => new Promise(async (resolve, reject) => {
    try {

        const findId = await Product.findOne({ _id: id, userId })
        if (!findId) {
            return reject({
                error: -1,
                messange: "Thẻ không tồn tại !!!"
            })
        }
        const edit = await Product.findOneAndUpdate(
            { _id: id, userId },
            {
                title,
                link,
                status
            },
            { new: true }
        )

        return resolve({
            error: 0,
            messange: `Sửa thành công !!!! ${id}`,
            data: edit
        })
    } catch (error) {
        return reject({
            messenge: -1,
            error
        })
    }
})