
export default function renderAboutPage() {
    const CONTENT = document.getElementById("content")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")

    div1.classList.add("content")
    div2.classList.add("content")
    div3.classList.add("content")

    div1.textContent = `Restaurant Yukihira (食事処 ゆきひら Shokujidokoro Yukihira) is a Japanese style special-of-the-day type restaurant owned by Joichiro Yukihira in the Sumiredori Shopping District. 
    However, Joichiro closed it in order to travel abroad for 2 or 3 years and send his son Soma to an Elite Culinary School called Totsuki Culinary Academy.`

    div2.textContent = `After Soma graduated, Joichiro passed ownership of the restaurant to Soma, who opens the restaurant only on an irregular schedule, as he spends most of his time traveling overseas, accepting invitations to cook from all over the world.`
    
    div3.textContent = `Restaurant Yukihira used to be a fairly small "Special of the Day" diner. 
    It was originally owned and operated by Kazusato Yukihira, who later passed on the restaurant to his daughter, Tamako Yukihira, and son-in-law, Joichiro Yukihira.`

    CONTENT.appendChild(div1)
    CONTENT.appendChild(div2)
    CONTENT.appendChild(div3)

    return CONTENT
}

