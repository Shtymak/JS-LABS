function Sum() {
    this.array = [];
    this.read = function read() {
        let input = prompt('Введіть число: ');
        if (!input || isNaN(+input)) {
            return 'Це виявилось не числом';
        }
        while (!isNaN(+input)) {
            if (!input) {
                return {
                    sum: this.array.reduce((item, total) => total + item, 0),
                    max: this.array.reduce((a, b) => Math.max(a, b)),
                };
            }
            this.array.push(+input);
            input = prompt('Введіть число: ');
        }
        return {
            sum: this.array.reduce((item, total) => total + item, 0),
            max: this.array.reduce((a, b) => Math.max(a, b)),
        };
    };
}

const sum = new Sum();
alert(JSON.stringify(sum.read()));
