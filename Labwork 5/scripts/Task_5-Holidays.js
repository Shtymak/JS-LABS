function holidays(date) {
    const newYear = {
        date: new Date(`01/01/${date.getFullYear() + 1}`),
        name: 'Новий Рік',
    };
    const christmas = {
        date: new Date(`01/07/${date.getFullYear() + 1}`),
        name: 'Різдво',
    };
    const v = {
        date: new Date(`04/28/${date.getFullYear() + 1}`),
        name: 'Різдво',
    };
    return {
        newYear: `До нового року - ${parseInt(
            (christmas.date - date) / (1000 * 60 * 60 * 24)
        )} днів`,
        christmas: `До різдва - ${parseInt(
            (newYear.date - date) / (1000 * 60 * 60 * 24)
        )} днів`,
        v: `До Великодня - ${parseInt(
            (v.date - date) / (1000 * 60 * 60 * 24)
        )} днів`,
    };
}

console.log(holidays(new Date()));
