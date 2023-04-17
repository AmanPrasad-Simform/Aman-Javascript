
// function a(){
//     let x = 9;
//     let az = 8 ;
//     function b(){
//         console.log(x)
//     }
//     return b;
// }
// a()()


// // anon fnc: 
// (function (){
//     console.log("aman");
// })();

// // CallBack Function:

// function x(){
//     return("Hello")  //arg func must return something, so that it can be passed in outer function
// }

// function y(a,name){
//     console.log(a(),name)
// }

// y(x,"Aman");


// // Event Listener:

// function eventt(){
//    let count = 0;
//     document.getElementById("but").addEventListener('click',function(){
//         console.log("Button clicked",++count)
//     })
// }
// eventt();


// let a=4;
// if(a<0){
//     console.log("0")
// }

// else if(a<5){
//     console.log("5")
// }
// else if(a<10){
//     console.log("10")
// }
// else{
//     console.log("elese")
// }

// cookies

// document.cookie = "id=value";
// document.cookie = "id1=value1; expires=";

// console.log(new Date().toUTCString)
// let flag = true;
// 
// try{
    // if(flag == true){
        // flag = true
        // console.log("inside try")
    // }
    // throw console.error("eee");
    // console.log("jjjjj")
// }catch{
    // console.log("inside catch")
    // return 0
// }
// console.log("SA")
// 

// function a(){
//     for(let i=2;i<10;i++){
//         if(i==2){
//             console.log("00000000")
//             return;
//         }
//         console.log("$$$$$$555$$");
//     }
//     console.log("9999999")
// }
// a()
// console.log("4")

// web worker ::4

// let i = 0

// function timer(){
//     i++
// postMessage(i)
//     setTimeout(timer(),500)
// }
// timer()   

//currying: here we set primary argument as predefined //
//benefit : no need to repeat argument again and again... and code readability increased!!

// const discount = (discount) => {
//    return price => {
//     return discount * price
//    } 
// }

// let discountOfTen = discount(0.10)
// console.log(discountOfTen(2000)) // passing price value as 2nd argument

// let discountOfTwenty = discount(0.20)
// console.log(discountOfTwenty(2000)) // passing price value as 2nd argument

// //example of currying ::
// const sum = (x) =>{
//     return (y)=>{
//         if(y){
//             console.log(y,"y")
//             return sum(x+y) //recursion
//         }
//         return x;
//     }
// }
// console.log(sum(1)(3)(5)(7)(9)()) 
