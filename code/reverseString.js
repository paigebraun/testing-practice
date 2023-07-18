function reverseString(string) {
    let reversed = "";
    while (string.length > 0) {
        reversed += (string.slice(-1));
        string = string.slice(0, -1);
    }
    return reversed;
}

module.exports = { reverseString };