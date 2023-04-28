import { React, useState } from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Work from './Work';
import Site from './Site';
import Navmenu from './Navmenu';
import Slider from './shared/Slider';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

export default function AppRouter() {
    const [verbosity, setVerbosity] = useState(5);
    return (
        <BrowserRouter>
            <Navmenu />
            <Routes>
                <Route path="" element={<About section="TestAbout" verbosity={verbosity} />} />
                <Route path="work" element={<Work section="TestWork" verbosity={verbosity} />} />
                <Route path="fun" element={<Hobbies />} />
                <Route path="contact" element={<Contact section="TestContact" verbosity={verbosity} />} />
                <Route path="site" element={<Site />} />
            </Routes>
            <Slider className="w-80 h-12" defaultValue={5} min={1} max={10} setVerbosity={setVerbosity} />
        </BrowserRouter>
    );
}