import { useState } from 'react'

const menuItems = [
    {
      name: "Beef Bulgogi",
      category: "Grilled",
      image: "beefBulgogi.avif"
    },
    {
      name: "Corn Cheese",
      category: "Grilled",
      image: "cornCheese.avif"
    },
    {
      name: "Grilled Pork Belly",
      category: "Grilled",
      image: "grilledPorkBelly.avif"
    },
    {
      name: "Hangover Ramen",
      category: "Soups & Stews",
      image: "hangOverRamen.avif"
    },
    {
      name: "Spicy Stir-Fried Chicken",
      category: "Grilled",
      image: "spicyStirFriedChicken.avif"
    },
    {
      name: "Spicy Rice Cakes with Dumplings",
      category: "Soups & Stews",
      image: "spicyRiceCakeWithDumplings.avif"
    },
    {
        name: "Chicken Bulgogi",
        category: "Grilled",
        image: "chickenBulgogi.avif"
    },
    {
        name: "Fried Chicken Wings",
        category: "Fried",
        image: "friedChickenWings.avif"
    },
    {
        name: "Fried Rice",
        category: "Fried",
        image: "friedRice.avif"
    },
    {
        name: "Fried Squid",
        category: "Fried",
        image: "friedSquid.avif"
    },
    {
        name: "Green Onion Chicken",
        category: "Fried",
        image: "greenOnionChicken.avif"
    },
    {
        name: "Mussel Soup",
        category: "Soups & Stews",
        image: "musselSoup.avif"
    },
    {
        name: "Pork Cutlet",
        category: "Fried",
        image: "porkCutlet.avif"
    },
    {
        name: "Rice Balls",
        category: "Grilled",
        image: "riceBalls.avif"
    },
    {
        name: "Spicy Cheese Seafood Pancake",
        category: "Grilled",
        image: "spicyCheeseSeafoodPancake.avif"
    },
    {
        name: "Spicy Seafood Soup",
        category: "Soups & Stews",
        image: "spicySeafoodSoup.avif"
    },
    {
        name: "Spicy Stir-Fried Squid",
        category: "Grilled",
        image: "spicyStirFriedSquid.avif"
    },
    {
        name: "Spicy Tofu Soup",
        category: "Soups & Stews",
        image: "spicyTofuSoup.avif"
    },
    {
        name: "Spicy Whelk with Thin Noodle",
        category: "Soups & Stews",
        image: "spicyWhelkThinNoodle.avif"
    },
    {
        name: "Stir-Fried Chicken Gizzard",
        category: "Grilled",
        image: "stirFriedChickenGizzard.avif"
    },
    {
        name: "Stir-Fried Kimchi Tofu",
        category: "Grilled",
        image: "stirFriedKimchiTofu.avif"
    },
    {
        name: "Takoyaki",
        category: "Fried",
        image: "takoyaki.avif"
    },
    {
        name: "Funnel Cake Fries",
        category: "Dessert & Snacks",
        image: "none"
    },
    {
        name: "Dried Filefish",
        category: "Dessert & Snacks",
        image: "none"
    },
    {
        name: "Ice Cream Scoop",
        category: "Dessert & Snacks",
        image: "none"
    },
  ]


export default function Menu(){
    const [currentCategory, setCategory] = useState("Grilled")
    return(
        <>
            <div className = "menuButtonsContainer">
                <MenuButtons currentCategory = {currentCategory} setCategory  ={setCategory}></MenuButtons>
            </div>
            
            <div className = "menuContainer">
                {menuItems.map(menuItem => (
                    // <h1>{menuItem.name}</h1>
                    <MenuCard currentCategory = {currentCategory} menuItem = {menuItem}></MenuCard>
                ))}
            </div>
        </>
    )
}

function MenuCard({menuItem, currentCategory}){
    return (menuItem.category == currentCategory) ? (
        <>
            <div className = "menuCard"> 
                <img className = "menuItemImage" src = {menuItem.image}></img>
                <h1 className = "menuItemName">{menuItem.name}</h1>
            </div>
        </>
    ): ""
}

function MenuButtons({currentCategory, setCategory}){
    let categories = []
    menuItems.forEach(menuItem => {
        if(!categories.includes(menuItem.category)){
            categories.push(menuItem.category)
        }
    })
    return(
        <>
            {categories.map(category => (
                <MenuButton currentCategory = {currentCategory} setCategory = {setCategory} category = {category}></MenuButton>
            ))}
        </>
    )
}

function MenuButton({currentCategory, category, setCategory}){
    return(
        <button style = {currentCategory == category ? {opacity: "60%"}: {opacity: "100%"}} className = "menuButton" onClick = {() => {setCategory(category)}}>{category.toUpperCase()}</button>
    )
}
