import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import About from "./components/About"
import Footer from "./components/Footer"
import { useState } from "react"
export default function Home(){
    const [activeTab, setActiveTab] = useState('home')
    return(
        <>
            {/* <NavBar></NavBar> */}
            <Banner image = {"Banner2.jpg"}></Banner>
            <About activeTab = {activeTab} setActiveTab = {setActiveTab}></About>
            <Footer></Footer>
        </>
    )
}