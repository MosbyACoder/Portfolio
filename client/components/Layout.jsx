
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
        <div class="wrapper">
            <h1>Lucas Fraser's Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/project">Project</Link> |
                <Link to="/services">Services</Link> |
                <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </div>
        </>
    );
}