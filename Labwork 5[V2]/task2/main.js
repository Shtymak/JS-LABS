function formatDate(date) {
    const diff = Date.now() - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (days > 0) {
        return date;
    }
    if (hours > 0) {
        return `${hours} годин тому`;
    }
    if (minutes > 0) {
        return `${minutes} хвилину тому`;
    }
    return `прямо зараз`;
}

alert(formatDate(new Date('2020-01-01')));
alert(formatDate(new Date(Date.now() - 1000 * 60 * 60 * 23)));
alert(formatDate(new Date(Date.now() - 1000 * 60 * 59)));
alert(formatDate(new Date(Date.now() - 1000 * 59)));
