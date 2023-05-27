import { React, useState } from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Work from './Work';
// import Site from './Site';
import Navmenu from './Navmenu';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

export default function AppRouter() {
    const [verbosity, setVerbosity] = useState(5);
    return (
        <BrowserRouter>
            <Navmenu />
            <Routes>
                <Route path="" element={<About section="About" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="work" element={<Work section="Work" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="fun" element={<Hobbies section="Hobbies" verbosity={verbosity} setVerbosity={setVerbosity} />} />
                <Route path="contact" element={<Contact section="Contact" />} />
                {/* <Route path="site" element={<Site />} /> */}
            </Routes>
        </BrowserRouter>
    );
}