// membuat array
const fruits = ['apple', 'orange', 'ciwi']

// mengakses array
// console.log(fruits[0])

// looping array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    // mencari data fruits
    if (fruits[i] == 'orange') {
        console.log('data di temukan')
        break
    }
}

// for(const fruit of fruits) {
//     console.log(fruit)
// }