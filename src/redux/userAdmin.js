'use client';
import { createSlice } from '@reduxjs/toolkit'

const userState = createSlice({
    name: 'user',
    initialState: {
        login: {
            start: false,
            data: null,
            error: false
        },
        allProduct: {
            start: false,
            data: null,
            error: false
        },
        logout: {
            start: false,
            messange: null,
            error: false
        },
        createProduct: {
            start: false,
            data: null,
            error: false
        },
        deleteProduct: {
            start: false,
            data: false,
            error: false
        }
    },
    reducers: {
        userStart: (state) => {
            state.login.start = true;
        },
        userData: (state, action) => {
            state.login.start = false;
            state.login.data = action.payload;
            state.login.error = false;
        },
        userError: (state) => {
            state.login.error = true;
        },
        productStart: (state) => {
            state.allProduct.start = true;
        },
        productData: (state, action) => {
            state.allProduct.start = false;
            state.allProduct.data = action.payload;
            state.allProduct.error = false;
        },
        productError: (state) => {
            state.allProduct.error = true;
        },
        logoutStart: (state) => {
            state.logout.start = true;
        },
        logoutData: (state, action) => {
            state.logout.start = false;
            state.login.messange = null;
            state.logout.error = false;
        },
        logoutError: (state) => {
            state.logout.error = true;
        },
        createStart: (state) => {
            state.createProduct.start = true;
        },
        createData: (state, action) => {
            state.createProduct.start = false;
            state.createProduct.data = action.payload;
            state.createProduct.error = false;
        },
        createError: (state) => {
            state.createProduct.error = true;
        },
        deleteStart: (state) => {
            state.deleteProduct.start = true;
        },
        deleteData: (state, action) => {
            state.deleteProduct.start = false;
            state.deleteProduct.data = true;
            state.deleteProduct.error = false;
        },
        deleteError: (state) => {
            state.deleteProduct.error = true;
        },

    }

})


export const { userStart,
    userData,
    userError,
    productStart,
    productData,
    productError,
    logoutStart,
    logoutData,
    logoutError,
    createStart,
    createData,
    createError,
    deleteStart,
    deleteData,
    deleteError } = userState.actions
export default userState.reducer