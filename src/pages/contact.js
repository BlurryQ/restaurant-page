
export default function renderContactPage() {
    const CONTENT = document.getElementById("content")
    const div1 = document.createElement("div")
    const div2Grid = document.createElement("div")
    const div2cell1 = document.createElement("div")
    const div2cell2 = document.createElement("div")
    const div2cell3 = document.createElement("div")
    const div2cell4 = document.createElement("div")
    const div2cell5 = document.createElement("div")
    const div2cell6 = document.createElement("div")
    const div2cell7 = document.createElement("div")
    const div2cell8 = document.createElement("div")
    const div3 = document.createElement("div")

    div1.classList.add("content")
    div2Grid.classList.add("content", "address")
    div3.classList.add("content")

    div1.textContent = `The Sumiredori Shopping District (すみれ通り商店街 Sumiredori shotengai) is one of the recurring locations in the Shokugeki no Soma series. 
    Located in Sumire Town, Restaurant Yukihira is located here and was founded by Joichiro Yukihira’s father-in-law some time ago. 
    The location plays a major role in the Karaage Wars Arc.`

        div2cell1.textContent = `〒 001-9891`
        div2cell2.textContent = `Restaurant Yukihira`   
        div2cell3.textContent = `すみれ 町`   
        div2cell4.textContent = `Sumiredori shotengai`   
        div2cell5.textContent = `すみれ通り商店街`   
        div2cell6.textContent = `Sumire Town`  
        div2cell7.textContent = `食事処 ゆきひら`    
        div2cell8.textContent = `001-9891`    

    div2Grid.appendChild(div2cell1)
    div2Grid.appendChild(div2cell2)
    div2Grid.appendChild(div2cell3)
    div2Grid.appendChild(div2cell4)
    div2Grid.appendChild(div2cell5)
    div2Grid.appendChild(div2cell6)
    div2Grid.appendChild(div2cell7)
    div2Grid.appendChild(div2cell8)
    
    div3.textContent = "Tel: 019-8910-1819 "

    CONTENT.appendChild(div1)
    CONTENT.appendChild(div2Grid)
    CONTENT.appendChild(div3)
}
