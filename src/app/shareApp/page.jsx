"use client";
import React, { useEffect, useRef, useState } from 'react';
import '@/assets/shareDoc/share.css';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Stack, Typography, Pagination } from '@mui/material';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Page() {

    return (
        <>
            <section className="container">

                <Container sx={{ bgcolor: '#e0e0e0', borderRadius: 2, color: "black" }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Chào mọi người! Chào mừng đến với trang Share Tất Cả ứng dụng FREE!
                    </Typography>

                    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Nguyên nhân thành lập trang này:
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • <strong>Cảm thấy bực bội:</strong> Mình không thể chịu nổi những người thường xuyên share ứng dụng trên mạng yêu cầu người dùng vào các trang web f88 này nọ lấy mã rồi mới cho tải =]] .
                            nên mình quyết định lập ra trang này nhầm mục dích để share những ứng dụng mà không cần dẫn tới trang khác lấy mã .
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • <strong>Chia sẻ App:</strong>Giúp cho ae lấy ứng dụng về nhanh gọn lẹ!
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            <span role="img" aria-label="hand-icon">👉</span> Nếu bạn biết app nào hay, hãy gửi về email:
                            <Link href="mailto:hodat4115@gmail.com" sx={{ ml: 1, fontWeight: 'bold' }}>
                                hotancdat17@gmail.com
                            </Link>
                            để mình có thể chia sẻ đến mọi người.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" align="center">
                        P/S: Website có thể chưa hoàn hảo, mong mọi người thông cảm. Mình quen làm BackEnd hơn nên FrontEnd còn gà lắm(thực tế mình LƯỜI =]])!{' '}

                    </Typography>

                </Container>

                <section className="containerGrid">

                    Đang được cập nhật

                </section>
            </section>
        </>
    );
}
