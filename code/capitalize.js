function capitalize(string) {
    return string.substring(0,1).toUpperCase() + string.slice(1);
}

module.exports = { capitalize };