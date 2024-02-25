const clear =document.querySelector(".clear");
const del=document.querySelector(".delete");
const number=document.querySelectorAll(".numbers");
const decimal=document.querySelector(".dot");
const equals=document.querySelector(".equals")
const operators=document.querySelectorAll(".operator");

const subTotal=document.querySelector(".subTotal");
const total=document.querySelector(".total");
let previousValue="";
let currentValue="";
let operator="";

decimal.addEventListener("click",function(){
    addDecimal();
})


equals.addEventListener("click",function(){
    if(currentValue !="" &&previousValue!=""){
        calculate();
        subTotal.textContent="";
        if(previousValue.length<=5){
            total.textContent=previousValue;
        }else{
            total.textContent=previousValue.slice(0,5) + "...";
        }
    }
});

number.forEach(number=>{number.addEventListener("click",(e)=>{
handleNumber(e.target.textContent)
total.textContent=currentValue;
})})

operators.forEach(op=>{op.addEventListener("click",function(e){
    handleOperator(e.target.textContent)
    subTotal.textContent=previousValue +' '+ operator;
   total.textContent=currentValue;
})})

function handleNumber(num){
    if(currentValue.length<=5){
        currentValue+=num;
    }}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue+=".";
    }
}

function handleOperator(op){
operator=op;
previousValue=currentValue;
currentValue="";
}
clear.addEventListener("click",function(){
    operator="";
    currentValue="";
    previousValue="";
    total.textContent=currentValue;
    subTotal.textContent=currentValue;
})
del.addEventListener("click",function(){
    currentValue=currentValue.slice(0,-1);
    total.textContent=currentValue;
})
 function calculate(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);
    if(operator=="+"){
        previousValue+=currentValue;
    }else if(operator=="-"){
        previousValue-=currentValue;
    }else if(operator=="x"){
        previousValue*=currentValue;
    }else {
        previousValue/=currentValue;
    }
    previousValue=roundNumber(previousValue);
    previousValue=previousValue.toString();
    currentValue=currentValue.toString();
}
function roundNumber(num){
    return Math.round(num*1000)/1000;
}