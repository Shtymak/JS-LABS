const buttonSubmit = document.querySelector("button")
const age = document.querySelector("input")

function detectAge(value) {
    if (value < 18) {
        return "Ви не повнолітній";
    } else if (value < 30) {
        return "Ви підпадаєте під потрібну вікову категорію"
    }
    return "Ви занадто старий!"
}

function showAnswer(notifyTag = "div") {
    const messageBox = document.querySelector(notifyTag) ?? document.createElement(notifyTag)
    document.body.appendChild(messageBox)
    messageBox.innerText = detectAge(parseInt(age.value))
}

buttonSubmit.addEventListener("click", () => showAnswer())
