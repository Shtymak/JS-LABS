const age = parseInt(prompt("Введіть Ваш вік:"))
let message;
if (age < 18) {
    message = `Ви не повнолітній`
} else if (age <= 30) {
    message = `Ви підпадаєте під потрібну вікову категорію`
} else {
    message = `Ви занадто старий`
}
alert(message)
