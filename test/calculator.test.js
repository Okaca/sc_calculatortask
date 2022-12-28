
const {sum, subtract, multiply, divide} = require('../src/calculator')

describe("Calculator tests", () => {

    test('adds two numbers', () =>{
        const error = new Error("Invalid value");
        try{
            sum("a", 2)
        }catch (e){
            expect(e).toBe(error.message)
        }
    
        expect(sum(1,2)).toBe(3)
    
    })
    
    test('adds two numbers', () =>{
        const error = new Error("Invalid value");
        try{
            subtract("a", 2)
        }catch (e){
            expect(e).toBe(error.message)
        }
    
        expect(subtract(3,2)).toBe(1)
    })
    
    test('adds two numbers', () =>{
        const error = new Error("Invalid value");
        try{
            multiply("a", 2)
        }catch (e){
            expect(e).toBe(error.message)
        }
    
        expect(multiply(3,2)).toBe(6)
    
    })
    
    test('adds two numbers', () =>{
        const error = new Error("Invalid value");
        try{
            divide("a", 2)
        }catch (e){
            expect(e).toBe(error.message)
        }
    
        expect(divide(6,2)).toBe(3)
    
    })

}) 