"use client"
import { userData } from "@/redux/userAdmin"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"

export const axiosJWT = axios.create()


export const setAxiosJWTInterceptor = (dispatch, user) => {
    axiosJWT.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodedJwt = jwtDecode(user?.token);

            if (decodedJwt.exp < date.getTime() / 1000) {
                const requestRefresh = await refsherToken();
                const tokenNew = {
                    ...user,
                    token: requestRefresh?.newToken?.token,
                };
                await dispatch(userData(tokenNew));
                config.headers["Authorization"] = `Bearer ${requestRefresh.newToken?.token}`;

            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

const refsherToken = async () => {
    try {
        const request = await axios.post('/api/v1/refreshToken', {}, { withCredentials: true })
        return request.data
    } catch (error) {
        // console.log(error)
    }
}