function secondsToday() {
    const today = new Date();
    const seconds =
        today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
    return seconds;
}
alert(secondsToday());
