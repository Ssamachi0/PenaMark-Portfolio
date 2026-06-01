'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        function handleScroll() {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <nav className={scrolled ? 'navbar navbar-scroll' : 'navbar'}>

            <h1 className="logo">My Portfolio</h1>

            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

        </nav>
    );
}