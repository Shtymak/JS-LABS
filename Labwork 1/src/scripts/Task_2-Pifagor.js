const inputs = document.querySelectorAll("input")
inputs.forEach(input => input.addEventListener('input', () => showAnswer()))

const hypotenuse = (n, m) => Math.sqrt(n ** 2 + m ** 2);

function showAnswer(notifyTag = "div") {

    const messageBox = document.querySelector(notifyTag) ?? document.createElement(notifyTag)
    document.body.appendChild(messageBox)
    messageBox.innerText = hypotenuse(parseInt(inputs[0].value), parseInt(inputs[1].value))
}

showAnswer()
