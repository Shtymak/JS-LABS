String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Array.prototype.joinAsWord = function () {
    return this.map((element, index) =>
        index !== 0 ? element.capitalize() : element
    ).join('');
};

const FormatName = (value) => {
    const words = value.split('-').joinAsWord();
    return words;
};

const bg = 'bg-me-hello';
alert(FormatName('bg-color')); //bgColor
alert(FormatName('user-names')); //userNames
alert(FormatName('font-size')); //fontSize
alert(FormatName(bg));
