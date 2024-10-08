/*
File name: MainRouter.jsx
Student name: Lucas Fraser
Student ID: 300725181
Date: Oct 1, 2024
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '/components/Home'
import About from '/src/about'
import Contact from '/src/contact'
import Project from '/src/project'
import Services from '/src/services'
import Layout from '/components/Layout'


const MainRouter = () => {
    return (
    <div>
        <Layout/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/services" element={<Services />} /> 
        </Routes>
    </div>
    )
}
export default MainRouter