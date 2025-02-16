import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Categories from "../Catergries/Categories"




export default function Layout(){

    return <>
        <Navbar></Navbar>

        <Categories></Categories>

        <Outlet></Outlet>

        
        <Footer></Footer>
    </>
}