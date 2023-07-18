const Calculator = require('../code/calculator');

describe("Calculator", () => {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    test("Add", ()=> {
        expect(calculator.add(1, 2)).toEqual(3);
    })
    test("Subtract", ()=> {
        expect(calculator.subtract(4, 2)).toEqual(2);
    })
    test("Divide", ()=> {
        expect(calculator.divide(8, 2)).toEqual(4);
    })
    test("Multiply", ()=> {
        expect(calculator.multiply(2, 3)).toEqual(6);
    })
});