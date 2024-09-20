'use client';
import React, { useEffect, useState } from 'react';
import "@/assets/login/containerLogin.css";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/redux/apiRequest';
import { useDispatch } from 'react-redux';

const LoginComponent = (request) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();
    const disPath = useDispatch();

    const loginAdmin = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
        userLogin(user, disPath, router)

    }


    return (
        <div className="container">
            <div className="card">
                <h3 className="subtitle">Login</h3>
                <form onSubmit={loginAdmin}>
                    <div className="mb-4">
                        <label className="label" htmlFor="username">
                            Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="input"
                            placeholder="Email or Username"
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-muted-foreground text-sm">
                        <Link className="link" href="/register"> Đăng kí </Link>
                        <br />
                        Bạn chưa có mật khẩu ?
                    </div>
                    <button type="submit" className="button">
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
