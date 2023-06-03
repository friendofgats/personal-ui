import { React, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Navmenu from './Navmenu';
import Resume from './Resume';
import Site from './Site';
import Work from './Work';
import { BrowserRouter, Navigate, Routes, Route, } from "react-router-dom";

export default function AppRouter() {
    const [verbosity, setVerbosity] = useState(3);
    return (
        <BrowserRouter>
            <Navmenu />
            <Routes>
                <Route path="about" element={<About section="About" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="work" element={<Work section="Work" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="fun" element={<Hobbies section="Hobbies" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="contact" element={<Contact section="Contact" />} />
                <Route path="guts" element={<Site section="Site" />} />
                <Route path="resume" element={<Resume section="Resume" />} />
                <Route path="*" element={<Navigate to='about' />} />
            </Routes>
        </BrowserRouter>
    );
}