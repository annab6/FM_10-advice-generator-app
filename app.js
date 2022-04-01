const adviceId = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")
const diceBtn = document.getElementById("dice-btn")


diceBtn.addEventListener("click", async() =>{
    try{
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        adviceId.textContent = `Advice #${data.slip.id}`
        adviceText.textContent = data.slip.advice
    } catch(e) {
        adviceText.textContent ="Something went wrong... Please try again!"
        adviceId.style.color = "hsl(356, 100%, 41%)"
        adviceText.style.color = "hsl(356, 100%, 41%)"
        console.log(e);
    }
})

