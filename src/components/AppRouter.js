import '../App.css';
import About from './About';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Resume from './Resume';
import Site from './Site';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="me" element={<About />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="hobbies" element={<Hobbies />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="site" element={<Site />} />
                </Routes>
            </BrowserRouter>
        </fragment>
    );
}