const analyzeArray = require('../code/analyzeArray');

it("Analyze Array", ()=> {
    expect(analyzeArray([1, 2, 3, 4])).toMatchObject({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})