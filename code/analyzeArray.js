function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length
    };
}

function getAverage(arr) {
    return arr.reduce((previous, current) => (current += previous)) / arr.length;
}

function getMin(arr) {
    return Math.min(...arr);
}

function getMax(arr) {
    return Math.max(...arr);
}

module.exports = analyzeArray;