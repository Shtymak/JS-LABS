const Total = function (startValue){
    this.value = parseInt(startValue)
    this.read = ()=> {
        const number = prompt("Введіть число")
        if (isNaN(+number) || !number ){
            alert('Це не число')
            return;
        }
        this.value += +number;
    }
}
const sum = new Total('10')
sum.read()
sum.read()
alert(sum.value)