function getDiff(date) {
    const now = Date.now();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return {
        days,
        hours,
        minutes,
    };
}

function formatDate(date) {
    const diff = getDiff(date);
    if (diff.days > 0) {
        return `${date}`;
    }
    if (diff.hours > 0) {
        return `${diff.hours} годин тому`;
    }
    if (diff.minutes > 0) {
        return `${diff.minutes} хвилину тому`;
    }
    return `прямо зараз`;
}

console.log(formatDate(new Date(Date.now() - 1000 * 60 * 60 * 18 * 2)));
console.log(formatDate(new Date(Date.now() - 1000 * 60 * 60 * 18)));
console.log(formatDate(new Date(Date.now() - 1000 * 60 * 60)));
console.log(formatDate(new Date(Date.now() - 1000 * 60)));
console.log(formatDate(new Date(Date.now() - 1000)));
