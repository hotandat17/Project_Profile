import axios from "axios";
import { createData, createError, createStart, deleteData, deleteError, deleteStart, logoutData, logoutError, logoutStart, productData, productError, productStart, userData, userError, userStart } from "./userAdmin";
import { axiosJWT } from "@/lib/axiosJWT";


export const userLogin = async (userLogin, disPath, router) => {
    disPath(userStart())
    try {
        const request = await axios.post('/api/v1/login', userLogin)
        disPath(userData(request.data))
        router.push('/adminUser')
    } catch (error) {
        disPath(userError)
    }
}

export const getAllProduct = async (disPath, token, page) => {
    disPath(productStart())
    try {
        const request = await axiosJWT.get(`/api/v1/product?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const time = setInterval(() => {
            request
            clearInterval(time)
        }, 1000)
        disPath(productData(request.data))
    } catch (error) {
        disPath(productError)
    }
}

export const logout = async (dispath, id, token) => {
    dispath(logoutStart)
    try {
        await axiosJWT.post(`/api/v1/logout`, id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispath(logoutData)
    } catch (error) {
        dispath(logoutError)
    }
}

export const createProduct = async (disPath, token, title, link, status) => {
    disPath(createStart)
    try {
        const request = await axiosJWT.post(`/api/v1/product`, { title, link, status }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        disPath(createData(request.data))
    } catch (error) {
        disPath(createError)
    }
}

export const deleteProduct = async (disPath, token, id) => {
    disPath(deleteStart)
    try {
        const request = await axiosJWT.delete(`api/v1/product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const time = setInterval(() => {
            request
            clearInterval(time)
        }, 1000)
        disPath(deleteData)
    } catch (error) {
        disPath(deleteError)
    }
}