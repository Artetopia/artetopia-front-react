import "./styles.css";
import SideBar from "../../components/SideBar";
import { useState } from "react";

const Artesano = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
    const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen);
    return (
        <>
           <div className="App wrapper">
            <SideBar isOpen={sidebarIsOpen} toggle={toggleSidebar} userRole="Admin"></SideBar>
           </div>
        </>
    )
}

export default Artesano;