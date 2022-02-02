export const transformNumber = (number: string) => {
    // $(".numeric").numeric({ decimal : ".",  negative : false, scale: 3 });
    if (!number.slice(-1).match(/^[0-9]+\.?[0-9]*$/)) {
        number = number.slice(0, -1);
        return;
    }
    // remove the dots, split the string and reverse it
    var a = number.replace(/\./g, '').split('').reverse();

    // start from 3 and as long as there's a number
    // add a dot every three digits.
    var pos = 3;
    while (a[pos] !== undefined) {
        a.splice(pos, 0, '.');
        pos = pos + 4;
    }
    // reverse, join and reassign the value
    return (number = a.reverse().join(''));
};