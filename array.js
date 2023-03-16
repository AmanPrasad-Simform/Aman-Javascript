//array is an object

// declaring method:
let arr = new Array("aman",123,true)
// let arr = ["aman",123,true]
arr.push(4)
console.log(arr)

//reference type [it stores data in heap memory (dynamic)]-------------

// let arr1 = [1,2,3]
// let arr2 = arr1;
// console.log("array1", arr1)
// console.log("array2", arr2)
// ----------------------------------------
// arr1.push(4)
// console.log("After incrementing")
// console.log("array1", arr1)
// console.log("array2", arr2)
// --------------------------------------
// how to clone array
arr1 = ["aman",123,true]
// arr2 = [].concat(arr1)

// arr2 = [...arr1] //spread operator

arr2 = arr1.slice(0,2)
console.log("array1", arr1)
console.log("array2", arr2)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits)
