const sum = parseFloat(prompt("Введіть суму депозиту"))
const period = parseInt(prompt("Період депозиту:"))
if (sum <= 0 || period < 1) {
    alert("Сума не може бути менше ніж 0")
}

function Result(sum, period) {
    if (period < 3) {
        return sum + sum * 0.1
    }
    if (period < 6) {
        return sum + sum * 0.2
    }
    return period <= 12 ? sum + sum * 0.3 : "Термін занадто великий!"
}

alert(`Результат: ${Result(sum, period)}`)
