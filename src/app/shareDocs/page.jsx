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
    const [doc, setDoc] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const handlePage = (event, value) => {
        setPage(value)
    }
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        const pageQuery = searchParams.get('page');
        if (searchQuery) {
            setSearch(searchQuery);
        }
        if (pageQuery) {
            setPage(pageQuery)
        }
    }, [searchParams]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const viewProduct = await axios.get(`/api/pages/sharedoc?search=${search}&page=${page}`);
                setDoc(viewProduct.data.data.data);
                setTotalPage(viewProduct.data.data.totalPage)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [search, page]);
    useEffect(() => {
        router.push(`shareDocs/?search=${encodeURIComponent(search)}&page=${encodeURIComponent(page)}`, undefined, { shallow: true });
    }, [search, page]);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && search.trim()) {
            setPage(1);
        }
    };
    const handleText = (dec) => {
        return dec.split(' ')[0]
    };
    return (
        <>
            <section className="container">

                <Container sx={{ bgcolor: '#e0e0e0', borderRadius: 2, color: "black" }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Chào mọi người! Chào mừng đến với trang Share Tất Cả Các Khóa Học FREE!
                    </Typography>

                    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Nguyên nhân thành lập trang này:
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • <strong>Cảm thấy bực bội:</strong> Mình không thể chịu nổi những người thường xuyên share khóa học trên mạng xã hội
                            như Facebook, TikTok, và chỉ nhắn tin cho mình mà không thèm trả lời. Họ thường đăng các khóa học miễn phí nhưng lại ẩn
                            ý bán khóa học, hoặc spam quảng cáo các trang như Teach28. Chính vì điều đó, mình quyết định tạo ra trang này!
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            • <strong>Chia sẻ kiến thức:</strong> Mình muốn giúp đỡ những người mới bắt đầu có cơ hội tiếp cận những kiến thức bổ
                            ích một cách dễ dàng hơn. Chúng ta chính là mầm mống cho sự phát triển của đất nước!
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            <span role="img" aria-label="hand-icon">👉</span> Nếu bạn biết khóa học nào hay, hãy gửi về email:
                            <Link href="mailto:hotancdat17@gmail.com" sx={{ ml: 1, fontWeight: 'bold' }}>
                                hodat4115@gmail.com
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

                    <div style={{ background: "white ", padding: "12px" }}>
                        {/* Search Input */}
                        <TextField
                            label="Search"
                            variant="outlined"
                            sx={{ marginBottom: "12px" }}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        {/* Table */}
                        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Khóa học</TableCell>
                                        <TableCell align="left">Nội dung</TableCell>
                                        <TableCell align="right">Link</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {doc.map((item, index) => (
                                        <TableRow hover key={index}>
                                            <TableCell>{handleText(item.title)}</TableCell>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell align="right">
                                                <Link style={{ textDecoration: "none" }} target='_bank' href={item.link}> <Button variant="outlined">Link</Button></Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                        {/* Pagination */}
                        <Stack spacing={2} sx={{ mt: 2 }}>
                            <Typography>Page: {page}</Typography>
                            <Pagination count={totalPage} page={page} onChange={handlePage} />
                        </Stack>
                    </div>

                </section>
            </section>
        </>
    );
}
