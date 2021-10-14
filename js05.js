let num1 = parseInt(prompt("Añade primer numero"));

let num2 = parseInt(prompt("Añade otro numero"));


function compare(num1, num2) {

    if (num1 > num2) {
        return true
    } else {
        return false
    }
}

console.log(compare(num1, num2));