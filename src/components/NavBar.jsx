import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div className = "navBar">
            <h1>Micky's Soju House</h1>
            <div className = "navBarButtons">
                <div className = "navBarButton"><Link  to = "/">home</Link></div>
                <div className = "navBarButton"><Link  to = "/Menu">menu</Link></div>
                <div className = "navBarButton">karaoke</div>
            </div>
        </div>
    )
}

