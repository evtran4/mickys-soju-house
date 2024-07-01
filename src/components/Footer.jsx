export default function Footer(){
    return(
        <div className = "footerContainer">

            <div className = "footerSection">
                <div className = "iconsContainer">
                    <a href = "https://www.instagram.com/m.sojuhouse/" target="blank">
                        <img className = "socialMediaIcon" src = "greyInstagramIcon.png"></img>
                    </a>

                    <a href="mailto:m.sojuhouse@gmail.com" target="blank">
                        <img className = "socialMediaIcon" src = "greyMailIcon.png"></img>
                    </a>

                    <a href="https://www.yelp.com/biz/mickys-soju-house-ellicott-city" target="blank">
                        <img className = "socialMediaIcon" src = "greyYelpIcon.png"></img>
                    </a>
                </div>
            </div>

            <div className = "footerSection">
                <p className = "footerText" >8450 Baltimore National Pike Ste 125 Ellicott City, MD 21043</p>
            </div>

            <div className = "footerSection"> 
                <p className = "footerText" >(410) 449-3932</p>
                <p className = "footerText" >m.sojuhouse@gmail.com</p>
            </div>
        </div>
    )
}
