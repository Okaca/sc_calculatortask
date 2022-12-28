function sum(a,b){
    try{
        if (Number.isInteger(a) && Number.isInteger(b))
            return a + b;
        else{
            const error = new Error("Invalid value");
            throw error
        }
    }catch (err){
        throw "Invalid value"
    }
}

function subtract(a,b){
    try{
        if (Number.isInteger(a) && Number.isInteger(b))
        return a - b;
        else{
            const error = new Error("Invalid value");
            return error
        }
    }catch (err){
        throw "Invalid value"
    }
}

function multiply(a,b){
    try{
        if (Number.isInteger(a) && Number.isInteger(b))
        return a*b;
        else{
            const error = new Error("Invalid value");
            return error
        }
    }catch (err){
        throw "Invalid value"
    }
}

function divide(a,b){
    try{
        if (Number.isInteger(a) && Number.isInteger(b) && b != 0)
        return a/b;
        else{
            const error = new Error("Invalid value");
            return error
        }
    }catch (err){
        throw "Invalid value"
    }
}

module.exports = {sum, subtract, multiply, divide};