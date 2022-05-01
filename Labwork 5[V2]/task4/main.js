const differenceDate = (date1, date2) =>
    Math.abs(
        Math.floor((new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24))
    );

alert(
    differenceDate(
        new Date('2022-04-01'),
        new Date(Date.now() - 1000 * 60 * 60 * 23)
    )
);
