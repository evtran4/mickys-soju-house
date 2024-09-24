import Close from "./components/Close"

const images = [
    {
        image: "karaoke1.jpg"
    },
    {
        image: "karaoke2.jpg"
    },
    {
        image: "karaoke3.jpg"
    },
    {
        image: "karaoke4.jpg"
    }
]

export default function Karaoke(){
    return(
        <>
            <Close></Close>
            <h1 className = "happyHourText">HAPPY HOUR</h1>
            <h1 className = "discountText">50% OFF KARAOKE</h1>
            <div className = "galleryContainer">
                {images.map((picture)=> (
                    <img className = "galleryImage" src = {picture.image}></img>
                ))}
            </div>
        </>
    )
}
