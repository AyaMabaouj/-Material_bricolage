const total = require("./test")


describe("total module", ()=>{
    test("calculate total 20 + 30 ", ()=>{
        expect(total(10,30)).toBe(40);
    });
});
