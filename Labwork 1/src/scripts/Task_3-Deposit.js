const buttonSubmit = document.querySelector("button")
const period = document.getElementById("period")
const sum = document.getElementById("sum")

function generateMessage(sum) {
    return `Ви отримаєте ${sum} грн.`
}

function getTillage(period) {
    if (period < 3)
        return 10;
    if (period < 6)
        return 20;
    return period < 12 ? 30 : undefined;
}

function getDepositSum(data) {
    const {period, sum} = data
    if (!period.value || !sum.value)
        return "Введені некоректні дані!"
    let sumValue = parseInt(sum.value)
    const tillage = getTillage(parseInt(period.value))
    return tillage ?
        generateMessage(sumValue += sumValue / 100 * tillage) :
        "Це занадто великий термін для вкладу."
}

function showAnswer(notifyTag = "div") {
    const messageBox = document.querySelector(notifyTag) ?? document.createElement(notifyTag)
    document.body.appendChild(messageBox)
    messageBox.innerText = getDepositSum({period, sum})
}


buttonSubmit.addEventListener('click', () => showAnswer())
