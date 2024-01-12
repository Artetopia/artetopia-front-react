import "./styles.css";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import Payments from "../Payments";
import { Route, Routes } from "react-router-dom";
import Page3 from "../Page3";

const Artesano = ({isSidebarOpen, toggleSidebar}) => {
    return (
        <>
           <div className="d-flex">
            <SideBar isOpen={isSidebarOpen} toggle={toggleSidebar} userRole="Artesano"></SideBar>
            <div className="w-100">
            <Routes>
                <Route path="/payments" element={<Payments/>}></Route>
                <Route path="/products" element={<Page3></Page3>}></Route>
            </Routes>
            </div>
           </div>
        </>
    )
}

export default Artesano;