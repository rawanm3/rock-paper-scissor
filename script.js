// comment
/*
export default function DoSomething(){

}

export const DoSomething = () => {

}
const  sum = (a,b) => a + b 

const isPositive = Number => Number >= 0


// ------------
 let age = 16;
 let name = age > 10 ? "pedro" : "jack" ;


 const component = () => {
  return age >10 ?<div>pedro</div> : <div>jack</div>;
 };

 //---------------------------

 const person = {
    name:"pedro",
    age: 20 ,
    isMarried:false,
 };

const person2 ={...person, name:"jack"};
//---------------------------------
var default_rate =0.1 ;
var rate = 0.05;
function getRate(){
    if(!rate){
        var rate=default_rate;
    }
    return rate ;
}
console.log("your rate is:", getRate());

//----------------------------
const alphabet = [ 'A','B','C','D','E','F']
const [ l , m ]= alphabet
console.log(l)
console.log(m)
*/
//--------------number guessing game--------
/*
const answer =Math.floor( Math.random() * 10 +1);
let guesses = 0 ;

document.getElementById("submitbtn").onclick = function(){
    let guess = document.getElementById("guessfield").value
    guesses += 1;
    if (guess == answer){
        alert(`${answer} is the #. it took you ${guesses}guesses`)
    }
    else if(guess<answer){
        alert("too small")
    }
    else{alert("too large")}
}
document.getElementById("submitbtn").onclick = function(){
    let temp ;
    if(document.getElementById("cbtn").checked){
       temp = document.getElementById("textbox").value;
       temp = Number(temp);
       temp = toCelsius(temp);
       document.getElementById("templabel").innerHTML = temp +"°c";
    }
    else if (document.getElementById("fbtn").checked){
        temp = document.getElementById("textbox").value;
       temp = Number(temp);
       temp = tofahrenheit(temp);
       document.getElementById("templabel").innerHTML = temp +"°f";

    }
    else{
        document.getElementById("templabel").innerHTML="select a unit" ;
    }
}


function toCelsius(temp){
    return (temp -32)*(5/9);
}
function tofahrenheit(temp){
    return temp*(9/5)+32;
}

let ages = [18,19,16];
let adults = ages.filter(checkage)
adults.forEach(print);

function checkage (element){
    return Math.pow(element,2);
}

function print (element){
    console.log(element);
}

const mylabel = document.getElementById("mylabel");

update();
setInterval(update,1000);

function update(){
    let date = new Date();
    mylabel.innerHTML = date ;

    function formattime(date){
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let amorpm = h >= 12 ? "pm":"am";
        h=(h%12)||12;
        
        return `${h}:${m}:${s} ${amorpm}`;
    }
}
let showquan = 0;
const showq = document.getElementById("showq").onclick =function(){
    document.getElementById("quan").innerHTML =`quantity: ${showquan}`
}
const add = document.getElementById("add").onclick =function(){
    showquan = showquan+1;
    document.getElementById("quan").innerHTML =`quantity: ${showquan}`
}
const plus2 = document.getElementById("plus+2").onclick =function(){
    showquan = showquan+2;
    document.getElementById("quan").innerHTML =`quantity: ${showquan}`
}
const plus3 = document.getElementById("plus+3").onclick =function(){
    showquan = showquan+3;
    document.getElementById("quan").innerHTML =`quantity: ${showquan}`
}
const reset = document.getElementById("reset").onclick =function(){
   // showquan = showquan+3;

    document.getElementById("quan").innerHTML =`quantity: ${showquan = 0}`
}

let calculation = "" ;

let btn0 = document.getElementById("btn0").onclick = function(){
    calculation += "0";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn1 = document.getElementById("btn1").onclick = function(){
    calculation += "1";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn2 = document.getElementById("btn2").onclick = function(){
    calculation += "2";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn3 = document.getElementById("btn3").onclick = function(){
    calculation += "3";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn4 = document.getElementById("btn4").onclick = function(){
    calculation += "4";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn5 = document.getElementById("btn5").onclick = function(){
    calculation += "5";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn6 = document.getElementById("btn6").onclick = function(){
    calculation += "6";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn7 = document.getElementById("btn7").onclick = function(){
    calculation += "7";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn8 = document.getElementById("btn8").onclick = function(){
    calculation += "8";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btn9 = document.getElementById("btn9").onclick = function(){
    calculation += "9";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btnby = document.getElementById("btn*").onclick = function(){
    calculation += "*";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btndiv = document.getElementById("btn/").onclick = function(){
    calculation += "/";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btnmin = document.getElementById("btn-").onclick = function(){
    calculation += "-";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btndot = document.getElementById("btn.").onclick = function(){
    calculation += ".";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btnplus = document.getElementById("btn+").onclick = function(){
    calculation += "+";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let equal = document.getElementById("btn=").onclick = function(){
    calculation = eval(calculation);
     document.getElementById("calculation").innerHTML =`${calculation}`
}
let btnreset = document.getElementById("reset").onclick = function(){
    calculation = "";
     document.getElementById("calculation").innerHTML =`${calculation}`
}
*/

let rock = document.getElementById("rock").onclick = function(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber< 1/3){
    //console.log("rock");
    document.getElementById("result").innerHTML=`u picked rock computer picked rock . tie`
   // document.getElementById("computer").innerHTML=`u rock`
    document.getElementById("wins").innerHTML=`wins:`
    }
    else if(randomNumber >= 1/3 && randomNumber< 2/3){
        document.getElementById("result").innerHTML=`u picked rock computer picked paper . u lose`
    }
    else if(randomNumber >= 2/3 && randomNumber< 1)
    {
    document.getElementById("result").innerHTML=`u picked rock computer picked scisssors. u win`
    }
}

let paper = document.getElementById("paper").onclick = function(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber< 1/3){
    document.getElementById("result").innerHTML=`u picked paper computer picked rock . u win`
    }
    else if(randomNumber >= 1/3 && randomNumber< 2/3){
    document.getElementById("result").innerHTML=`u picked paper computer picked paper . tie`
    }
    else if(randomNumber >= 2/3 && randomNumber< 1
    ){
    document.getElementById("result").     innerHTML=`u picked paper computer picked scissors . u lose`
    }
}
let scissors = document.getElementById("scissors").onclick = function(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber< 1/3){
    document.getElementById("result").     innerHTML=`u picked scissrs computer picked rock .u lose`
    }
    else if(randomNumber >= 1/3 && randomNumber< 2/3){
    document.getElementById("result").     innerHTML=`u picked scissors computer picked paper . u win`
    }
    else if(randomNumber >= 2/3 && randomNumber< 1
    ){
     document.getElementById("result").     innerHTML=`u picked scissrs computer picked scissors . tie`
    }
}










