function square(length, width = null) {
    return width == null ? length * length : length * width;
}
alert(square(20, 12));
alert(square(20));
