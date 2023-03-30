
function a(){
    let x = 9;
    let az = 8 ;
    function b(){
        console.log(x)
    }
    return b;
}
a()()


// anon fnc: 
(function (){
    console.log("aman");
})();

// CallBack Function:

function x(){
    return("Hello")  //arg func must return something, so that it can be passed in outer function
}

function y(a,name){
    console.log(a(),name)
}

y(x,"Aman");


// Event Listener:

function eventt(){
   let count = 0;
    document.getElementById("but").addEventListener('click',function(){
        console.log("Button clicked",++count)
    })
}
eventt();


let a=4;
if(a<0){
    console.log("0")
}

else if(a<5){
    console.log("5")
}
else if(a<10){
    console.log("10")
}
else{
    console.log("elese")
}

//adding to check internet