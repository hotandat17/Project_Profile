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
                        Chào mọi người! Chào mừng đến với trang này nhầm mục đích để admin tu luyện AI =]]!
                    </Typography>

                    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Ae vào trãi nghiệm cần yêu cầu như sau :
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • Máy ae phải có webcam nha
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" align="center">
                        P/S: Website có thể chưa hoàn hảo, mong mọi người thông cảm. Mình quen làm BackEnd hơn nên FrontEnd còn gà lắm(thực tế mình LƯỜI =]])!{' '}

                    </Typography>

                </Container>

                <section className="containerGrid">

                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Tên</TableCell>
                                    <TableCell align="left">Nội dung</TableCell>
                                    <TableCell align="right">Trãi nghiệm</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow hover >
                                    <TableCell> Detect Hand</TableCell>
                                    <TableCell>Nhận diện bàn tay và Khi bóp bàn tay lạy thì nó sẽ nhận ra đó là tín hiệu SOS vàchupj hình lại những tấm ảnh xung quanh trong 1  phút làm tư liệu </TableCell>
                                    <TableCell align="right">
                                        <Link style={{ textDecoration: "none" }} href={'/handrecognition'}> <Button variant="outlined">Truy cập</Button></Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover >
                                    <TableCell> Detect Face</TableCell>
                                    <TableCell>Nhận diện khuôn mặt đều khiển cho nhân vật  3D (Chưa hoàn thiện)</TableCell>
                                    <TableCell align="right">
                                        {/* <Link style={{ textDecoration: "none" }} target='_bank' href={'/handrecognition'}> <Button variant="outlined">Link</Button></Link> */}
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>

                </section>
            </section>
        </>
    );
}
