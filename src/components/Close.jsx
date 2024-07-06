import { Link } from "react-router-dom"
export default function Close(){
    return(
        <div className = "closeButtonContainer">
            <Link className = "link" to = "/"><img className = "closeButton" src = "close.png"></img></Link>
        </div>
    )
}