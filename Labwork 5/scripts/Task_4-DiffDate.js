const DifferenceDate = (date1, date2) => {
    const diffTime =
        date1.getDate() > date2.getDate() ? date1 - date2 : date2 - date1;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
console.log(
    DifferenceDate(
        new Date(Date.now() - 1000 * 60 * 60 * 18),
        new Date('2020-01-01')
    )
);
console.log(
    DifferenceDate(
        new Date('2020-01-01'),
        new Date(Date.now() - 1000 * 60 * 60 * 18)
    )
);
