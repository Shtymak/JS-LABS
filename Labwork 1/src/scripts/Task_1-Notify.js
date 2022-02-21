const showButton = document.getElementById("showButton");
const nameInput = document.getElementById("nameInput")

const start = () => alert("Введіть ваше ім'я")
const generateMessage = (name) => name ? `Привіт, ${name}!` : "Поле імені порожнє!"

function showNotify(notifyTag = "h1") {
    const messageBox = document.querySelector(notifyTag) ?? document.createElement(notifyTag)
    document.body.appendChild(messageBox)
    messageBox.innerText = generateMessage(nameInput.value)
    nameInput.style.display = "none"
    showButton.style.display = "none"
}

showButton.addEventListener('click', () => showNotify())

start()


