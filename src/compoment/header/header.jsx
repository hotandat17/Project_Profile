'use client';
import "@/assets/css/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faRightToBracket, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { useState, useEffect } from "react"
export default function Header() {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [icon, setIcon] = useState(faSun);
    const themeBackground = (e) => {
        e.preventDefault();
        setIsLightTheme(!isLightTheme);

        if (isLightTheme) {
            const body = document.querySelector('body');
            const header = document.querySelector('.header');
            const li = document.querySelectorAll('.header ul li .linkHeader');
            li.forEach(e => {
                e.style.color = "white";
            });
            header.style.backgroundColor = "black"
            body.style.backgroundColor = "black";
            body.style.color = "white";
            setIcon(faSun);
            localStorage.setItem('theme', 'dark');
        } else {
            const body = document.querySelector('body');
            const header = document.querySelector('.header');
            const li = document.querySelectorAll('.header ul li .linkHeader');
            li.forEach(e => {
                e.style.color = "black";
            });
            header.style.backgroundColor = "white"
            body.style.backgroundColor = "white";
            body.style.color = "black";
            setIcon(faMoon);
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            setIsLightTheme(false);
            const body = document.querySelector('body');
            const header = document.querySelector('.header');
            const li = document.querySelectorAll('.header ul li .linkHeader');
            li.forEach(e => {
                e.style.color = "white";
            });
            header.style.backgroundColor = "black"
            body.style.backgroundColor = "black";
            body.style.color = "white";
            setIcon(faSun);
        } else {
            setIsLightTheme(true);
            const body = document.querySelector('body');
            const header = document.querySelector('.header');
            const li = document.querySelectorAll('.header ul li .linkHeader');
            li.forEach(e => {
                e.style.color = "black";
            });
            header.style.backgroundColor = "white"
            body.style.backgroundColor = "white";
            body.style.color = "black";
            setIcon(faMoon);
        }
    }, []);

    return (
        <section className="header">
            <ul >
                <h2><Link className='linkHeader' href="/"><span>H</span><span>Ồ</span> <span>Đ</span><span>Ạ</span><span>T</span></Link></h2>
                <li><Link className='linkHeader' href="/"><FontAwesomeIcon icon={faUser} /> Introduce</Link></li>
                <li><Link className='linkHeader' href="#"><FontAwesomeIcon icon={faBook} />ShareDocs</Link></li>
                <li><Link className='linkHeader' href="/login"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link></li>
                <li onClick={themeBackground}>
                    <FontAwesomeIcon icon={icon} />
                    <div className='linkHeader' >
                        Theme
                    </div>
                </li>
            </ul>
        </section>
    )
}
