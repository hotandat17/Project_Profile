'use client';
import React, { useState, useEffect } from 'react'
import "@/assets/login/adminUser.css"
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { createProduct, deleteProduct, getAllProduct, logout } from '@/redux/apiRequest';
import { setAxiosJWTInterceptor } from '@/lib/axiosJWT';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
export default function Page() {
    const [activeTab, setActiveTab] = useState('post');
    const [editingPost, setEditingPost] = useState(null);
    const [page, setPage] = useState(1);
    const [title, setTitle] = useState()
    const [link, setLink] = useState()
    const [status, setStatus] = useState(false)
    const handleChange = (event, value) => {
        setPage(value);
    };
    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector(state => state.userData.login.data)
    const productAll = useSelector(state => state.userData.allProduct.data?.data);
    useEffect(() => {
        setAxiosJWTInterceptor(dispatch, user)
        getAllProduct(dispatch, user?.token, page)
    }, [page, user?.token])


    const handleLogout = () => {
        logout(dispatch, user?.messenge, user?.token)
        document.cookie = "refreshToken=''"
        router.push('/login')
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleOpen = () => setEditingPost(true)
    const handleCreateProduct = (e) => {
        e.preventDefault()
        createProduct(dispatch, user?.token, title, link, status)
        setTitle('')
        setLink('')
    }
    const handleDelete = (id) => {
        deleteProduct(dispatch, user?.token, id);
    }
    return (
        <div className="App">
            <header>
                <h1>Dashboard Quản lý Bài viết</h1>
            </header>
            <div className="container">
                <div className="tabs">
                    <div className={`tab ${activeTab === 'post' ? 'active' : ''}`} onClick={() => handleTabClick('post')}>Đăng bài viết</div>
                    <div className={`tab ${activeTab === 'view' ? 'active' : ''}`} onClick={() => handleTabClick('view')}>Xem bài viết</div>
                    <div className="tab" onClick={handleLogout} >Đăng xuất</div>
                </div>

                {activeTab === 'post' && (
                    <div className="content">
                        <h2>Đăng bài viết</h2>
                        <form onSubmit={handleCreateProduct}>
                            <label htmlFor="title">Tiêu đề:</label><br />
                            <input type="text" id="title" name="title" onChange={e => setTitle(e.target.value)} required /><br />
                            <label htmlFor="content">Nội dung:</label><br />
                            <textarea id="content" name="content" rows="4" onChange={e => setLink(e.target.value)} required /><br />
                            <button type="submit">Đăng bài</button>
                        </form>
                    </div>
                )}

                {activeTab === 'view' && (
                    <div className="content">
                        <h2>Xem bài viết</h2>
                        <Stack spacing={2}>
                            <Typography>Page: {page}</Typography>
                            <Pagination count={productAll?.totalPage} page={page} onChange={handleChange} />
                        </Stack>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>

                                        <TableCell align="right">Tiêu đề</TableCell>
                                        <TableCell align="right">Nội dung</TableCell>
                                        <TableCell align="right">Trạng thái</TableCell>
                                        <TableCell align="right">Hành động</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productAll?.data?.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="right">{row.title}</TableCell>
                                            <TableCell align="right">{row.link}</TableCell>
                                            <TableCell align="right">{row.status ? "Đã duyệt" : "Hủy duyệt"}</TableCell>
                                            <TableCell align="right">
                                                <button onClick={() => handleOpen()}>Sửa</button>
                                                <button onClick={() => handleDelete(row._id)}>Xóa</button>
                                                <button >{row.status ? "Duyệt" : "Hủy"}</button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                )}

                {editingPost && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setEditingPost(null)}>&times;</span>
                            <h2>Sửa bài viết</h2>
                            <form >
                                <label htmlFor="editTitle">Tiêu đề:</label><br />
                                <input type="text" id="editTitle" name="title" required /><br />
                                <label htmlFor="editContent">Nội dung:</label><br />
                                <textarea id="editContent" name="content" rows="4" required /><br />
                                <button type="submit">Lưu thay đổi</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}