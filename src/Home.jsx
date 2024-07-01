import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import About from "./components/About"
import Footer from "./components/Footer"
export default function Home(){

    return(
        <>
            <NavBar></NavBar>
            <Banner image = {"Banner2.jpg"}></Banner>
            <About></About>
            <Footer></Footer>
        </>
    )
}