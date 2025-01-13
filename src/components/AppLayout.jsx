import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "./Alert";

function AppLayout() {
    return (
        <>
        <Navbar/>
        <Alert/>

        <Outlet/>

        <footer>FOOTER</footer>
        </>
    )
}

export default AppLayout;