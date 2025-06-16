let random = Math.random()

let a = Number(prompt("Enter Value of a:"))
let b = Number(prompt("Enter Value of b:"))
let c = prompt("Select operation (+, -, *, /):")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "-"
}

if (c in obj){
    if (random>0.1){
        console.log(`The result is ${a} ${c} ${b}`)
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    }
    else{
        c = obj[c]
        console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    }
}
else{
    console.log("Invalid Operator")
    alert("Invalid Operator")
}