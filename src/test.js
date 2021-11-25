const array = [1, 5, 7, 2, 3];

const newArray = [];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    newArray.push(array[index] *2)

}


// const newArray = array.map(num => {
//     console.log(num)
//     return num * 2;
// })



console.log(newArray)
