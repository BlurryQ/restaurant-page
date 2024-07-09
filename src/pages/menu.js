export default function renderMenuPage() {
    const CONTENT = document.getElementById("content")

    const menuHeader = document.createElement("div")
    const recipeDisplay = document.createElement("div")
    const beefStewDiv = document.createElement("div")
    const beefStewImg = document.createElement("div")
    const beefStewTag = document.createElement("div")
    const furikakeGohanDiv = document.createElement("div")
    const furikakeGohanImg = document.createElement("div")
    const furikakeGohanTag = document.createElement("div")
    const revampedMackerelDiv = document.createElement("div")
    const revampedMackerelImg = document.createElement("div")
    const revampedMackerelTag = document.createElement("div")
    const mapoDoufuDiv = document.createElement("div")
    const mapoDoufuImg = document.createElement("div")
    const mapoDoufuTag = document.createElement("div")

    menuHeader.classList.add("menu-header")
    recipeDisplay.classList.add("recipe-grid")
    beefStewDiv.classList.add("recipe")
    beefStewImg.classList.add("recipe-img", "beef-stew")
    beefStewTag.classList.add("description")
    furikakeGohanDiv.classList.add("recipe")
    furikakeGohanImg.classList.add("recipe-img", "furikake-gohan")
    furikakeGohanTag.classList.add("description")
    revampedMackerelDiv.classList.add("recipe")
    revampedMackerelImg.classList.add("recipe-img", "revamped-mackerel")
    revampedMackerelTag.classList.add("description")
    mapoDoufuDiv.classList.add("recipe")
    mapoDoufuImg.classList.add("recipe-img", "mapo-doufu")
    mapoDoufuTag.classList.add("description")

    menuHeader.textContent = `Here are the staples of our menu:`
    beefStewTag.textContent = `A hearty stew made in Restaurant Yukihira. 
    It is perfect for your average patron, but was deemed not suitable for the Autumn Election Semifinals.`
    furikakeGohanTag.textContent = `An original take on the classical Furikake Gohan, the Yukihira style uses eggs coated by a golden coating using chilled chicken broth to create a golden jewel from the simplest ingredients.`
    revampedMackerelTag.textContent = `Taken from Restaurant Yukihira's secret menu, Sōma changed the standard Salmon used for the regular Yukihira Onigiri Chazuke and substituted with Mackerel. 
    Using the French cooking technique, poelee, Sōma created a new take on the classic Japanese dish. 
    The dish creates the feeling of a new sprout emerging from the coldness of winter to welcome in spring.`
    mapoDoufuTag.textContent = `A Chinese full course meal made in Restaurant Yukihira. 
    This meal consists of one mapo doufu dish, a popular Chinese dish from the Sichuan province. 
    It consists of tofu set in a spicy sauce, typically a thin, oily and bright red suspension, based on douban (fermented broadbean and chili paste) and douchi (fermented black beans), along with minced meat, usually pork or beef. 
    This comes with three other staple dishes.`

    beefStewDiv.appendChild(beefStewImg)
    beefStewDiv.appendChild(beefStewTag)
    furikakeGohanDiv.appendChild(furikakeGohanImg)
    furikakeGohanDiv.appendChild(furikakeGohanTag)
    revampedMackerelDiv.appendChild(revampedMackerelImg)
    revampedMackerelDiv.appendChild(revampedMackerelTag)
    mapoDoufuDiv.appendChild(mapoDoufuImg)
    mapoDoufuDiv.appendChild(mapoDoufuTag)
    recipeDisplay.appendChild(beefStewDiv)
    recipeDisplay.appendChild(furikakeGohanDiv)
    recipeDisplay.appendChild(revampedMackerelDiv)
    recipeDisplay.appendChild(mapoDoufuDiv)
    CONTENT.appendChild(menuHeader)
    CONTENT.appendChild(recipeDisplay)
}


