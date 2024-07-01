export default function Banner({image}){
    return (image == "Banner2.jpg") ? (
        <div className = "bannerImageContainer">
            <img src = {image} className = "bannerImage"></img>

            <div className = "bannerTextContainer">
                <h3 className = "bannerText">SAVE WATER. DRINK SOJU.</h3>
            </div>

            <div className = "arrowContainer">
                <img className = "arrow" src = {"arrow2.png"}></img>
            </div>
        </div>
    ): 
        <div className = "bannerImageContainer">
            <img src = {image} className = "bannerImage"></img>

            <div className = "arrowContainer">
                <img className = "arrow" src = {"arrow2.png"}></img>
            </div>
        </div>
}


{/* <div id ="bannerContainer">
<div class = banner></div>
<div id = mainLogoContainer>
    <img id= mainLogo src = "Images\logo.png"></img>
    <button id="watchButton" class="clickable" onclick='watchNow()'>WATCH NOW</button>
</div>
</div> */}