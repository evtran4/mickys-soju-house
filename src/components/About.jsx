import NavBar from "./NavBar"
import { Link } from "react-router-dom"

const navButtons = [
    {
        name: "home", 
        to: "/"
    }, 
    {
        name: "menu",
        to: "/Menu"
    },
    {
        name: "karaoke",
        to: "/"
    }

]
export default function About({activeTab, setActiveTab}){
    console.log(activeTab)
    return(
        <div className = "bodyContainer">
            <div className = "sideBar">
                <h3>PAGES</h3>
                {navButtons.map(tab => (
                    <NavButton tab = {tab}></NavButton>
                ))}
            </div>

            <div className = "aboutContainer">
                <img className = "mainLogoImage" src = "mainLogo.png"></img>
                <p className = "aboutText">Welcome to Soju House, your ultimate destination for an unforgettable night out! We blend the vibrant energy of a pub with the authentic flavors of Korean cuisine. Step inside to our lively atmosphere filled with laughter and music. Our bar offers an impressive selection of drinks, from refreshing fruity concoctions to expertly crafted Korean-inspired cocktails. Our menu takes you on a culinary journey through Korea, and our friendly staff ensures your visit is exceptional. Whether celebrating a special occasion or looking for a fun night out, Soju House is the perfect place to unwind and savor the best of Korean cuisine and culture.</p>
                <img className = "aboutImage" src = "about1.jpg"></img>
            </div>
            
            <div className = "sideBar">
                <h3>HOURS</h3>
                <p>MON - TUES / THURS<br></br> 5pm - 1am</p>
                <p>WEDNESDAY<br></br> CLOSED</p>
                <p>FRI - SAT<br></br> 5pm - 2am</p>
                <p>SUN<br></br> 5pm - 12am</p>
            </div>

        </div>
    )

    function NavButton({tab}){
        return(
            <div style = {(activeTab == tab.name) ? {textDecoration: "2px underline rgb(198, 198, 198)", textUnderlineOffset: "6px"} : {}} className = "navBarButton"  onClick = {() => {setActiveTab(tab.name)}}><Link  to = {tab.to}>{tab.name}</Link></div>
        )
    }
}

/*  text-decoration: 2px underline rgb(198, 198, 198);
  text-underline-offset: 6px;*/