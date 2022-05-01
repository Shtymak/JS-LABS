function secondsToday() {
    const today = new Date();
    return (
        today.getHours() * 60 * 60 +
        today.getMinutes() * 60 +
        today.getSeconds()
    );
}
console.log(secondsToday());
