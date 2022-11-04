// mapping buttons
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("equals");



// 1. functions for basic math operations start

let a = 2;
let b = 4;

function add(){
      return a+b;
}

function subtract(){
      return a-b;
}

function multiply(){
      return a*b;
}

function divide(){
      return a/b;
}


console.log(add());
console.log(subtract());
console.log(multiply());
console.log(divide());

// end of simple math functions

// operate function

function operate(a,b,c){
      if(a=="+"){
      console.log(add(b,c));
      }
}


function vorrang(){

      const i = 2+2*4;
      console.log(i);
}