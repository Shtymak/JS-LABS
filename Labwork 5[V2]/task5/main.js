function holidays(date) {
    const convert = 1000 * 60 * 60 * 24;
    const year = date.getFullYear() + 1;
    const newYear = {
        date: new Date(`${year}/01/01`),
        name: 'Новий Рік',
    };
    const christmas = {
        date: new Date(`${year}/01/07`),
        name: 'Різдво',
    };
    const toChristmas = parseInt((christmas.date - date) / convert);
    const toNewYear = parseInt((newYear.date - date) / convert);
    return `Новий рік - ${toNewYear} дні(в)\nДо різдва - ${toChristmas} дні(в)`;
}

alert(holidays(new Date()));
