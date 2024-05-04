import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


export const Rootlayout = () => {
  return (
    <>
        <Navbar/>
            <Outlet/>
        <Footer/>    
    </>
  )
}

export default Rootlayout