import { Link } from "react-router-dom"
export default function Close(){
    return(
        <div className = "backButtonContainer">
            <div className = "backButtonMargin">
                <Link className = "link" to = "/"><img className = "backButton" src = "backArrow.png"></img></Link>
            </div>
        </div>
    )
}