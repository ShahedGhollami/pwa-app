import React from "react";
import Home from '../pages/Home'
import About from '../pages/About'
import Users from '../pages/Users'
import { Route, Routes } from 'react-router-dom'
const Index = () => {
    return (<>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </>)
}
export default Index;