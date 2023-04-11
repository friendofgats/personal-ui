import React from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Resume from './Resume';
import Site from './Site';
import Navmenu from './Navmenu';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navmenu />
            <Routes>
                <Route path="me" element={<About section="TestAbout" verbosity={9} />} />
                <Route path="work" element={<Resume />} />
                <Route path="hobbies" element={<Hobbies />} />
                <Route path="contact" element={<Contact />} />
                <Route path="site" element={<Site />} />
            </Routes>
        </BrowserRouter>
    );
}