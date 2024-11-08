import './App.css'
import Header from './layout/Header/Header';
import Login from './page/Login/Login';
import Home from './page/Home/Home';
import Report from './page/Report/Report';
import Navbar from './layout/Navbar/Navbar';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
    return ( 
        <div>
            <Navbar />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </HashRouter>
        </div>
        
     );
}

export default App;