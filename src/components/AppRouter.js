import React from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Work from './Work';
import Site from './Site';
import Navmenu from './Navmenu';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navmenu />
            <Routes>
                <Route path="me" element={<About section="TestAbout" verbosity={10} />} />
                <Route path="work" element={<Work section="TestWork" verbosity={10} />} />
                <Route path="hobbies" element={<Hobbies />} />
                <Route path="contact" element={<Contact section="TestContact" verbosity={10} />} />
                <Route path="site" element={<Site />} />
            </Routes>
        </BrowserRouter>
    );
}