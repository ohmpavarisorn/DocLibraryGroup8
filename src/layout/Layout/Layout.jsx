import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";


import './Layout.css';
import Footer from "../Footer/Footer";
function Layout() {
    return ( 
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
     );
}

export default Layout;