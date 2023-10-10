// Calculator.jsx
let add = (a,b)=>{
    let sum = a+b;
    return sum;
}

let sub = (a,b)=>{
    let subs = a-b;
    return subs;
}

let mul = (a,b)=>{
    let mul = a*b;
    return mul;
}

let div = (a,b)=>{
    let division = a/b;
    division = division.toFixed(2);
    return division;
}

export {add,sub,mul,div};
