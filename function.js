// function declaration
function hitungUmunr(bod){
    const nilai = 2022 - bod
    return nilai
}

// function expression
const hitungUmunr = function(bod){
    const nilai = 2022 - bod
    return nilai
}

// arrow function
const hitungUmunr = (bod) => {
    const nilai = 2022 - bod
    return nilai
}

console.log(hitungUmunr(2000))