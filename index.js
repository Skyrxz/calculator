// let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']


// function shuffle(array) {
//    let currentIndex = array.length;
   
//    // let randomIndex = Math.floor(Math.random * array.length);
   
//    while(currentIndex != 0){
//       let randomIndex = Math.floor(Math.random() * array.length);
//       currentIndex--;
//       console.log(Math.floor(Math.random() * array.length))

//       let temp = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temp;
//    }

//    return array;
// }
// document.getElementById("o").innerHTML = shuffle(cards);

// let count = document.getElementById("count").innerText;
// count = Number(count);
// let increase = document.getElementById("increment");
// let save = document.getElementById('save')
// let previous = document.getElementById("previous")

// increase.onclick = function(){
//    count++;
//    document.getElementById("count").innerText = count;
//    console.log("New person added!")
// }

// save.onclick = function(){
//    console.log(count)
//    let countStr = count + ' - '
//    previous.innerHTML += countStr;
//    count = 0;
//    document.getElementById("count").innerText = count;
// }

// let countdown = 5;

function wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

// while(countdown != 0){
//    wait(1000);
//    console.log(countdown);
//    countdown--;
// }

// let welcome = document.getElementById("welcome");
// let name = "Ibereola Oludare."
// // let greeting = "Welcome back, "

// welcome.innerHTML = greeting + name ;

// welcome.innerHTML = welcome.innerHTML + "👋"

// let purchase = document.getElementById('purchase');
// let error = document.getElementById('error')

// purchase.onclick = function(){
//    error.textContent = "Something went wrong, try again later."
// }

let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let btn4 = document.getElementById('4');
let btn5 = document.getElementById('5');
let btn6 = document.getElementById('6');
let btn7 = document.getElementById('7');
let btn8 = document.getElementById('8');
let btn9 = document.getElementById('9');
let btn0 = document.getElementById('0');

let screen = document.getElementById('screen');
let currentOP = document.getElementById('currentOP')

let btnDelete = document.getElementById('delete');
let btnSignChanger = document.getElementById('signChanger');
let btnLeftBracket = document.getElementById('leftBracket');
let btnRightBracket = document.getElementById('rightBracket')
let btnDivision = document.getElementById('division');
let btnMultiplication = document.getElementById('multiplication');
let btnAddition = document.getElementById('addition');
let btnSubtraction = document.getElementById('subtraction');
let btnEqual = document.getElementById('equal');
let btnSqrt = document.getElementById('sqrt');
let btnSqr = document.getElementById('sqr');
let btnDecimal = document.getElementById('decimal');
let btnClear = document.getElementById('ac');

let value1 = '';

function selfdestruct(){
   document.getElementById('html').innerHTML = 'Self Destruct Complete.';
}

function wait(ms){
   var d = new Date();
   var d2 = null;
   do { d2 = new Date(); }
   while(d2-d < ms);
}

btn1.onclick = function(){
   value1 = value1 + '1';
   screen.textContent = value1;
};

btn2.onclick = function(){
   value1 = value1 + '2';
   screen.textContent = value1;
};

btn3.onclick = function(){
   value1 = value1 + '3';
   screen.textContent = value1;
};

btn4.onclick = function(){
   value1 = value1 + '4';
   screen.textContent = value1;
};

btn5.onclick = function(){
   value1 = value1 + '5';
   screen.textContent = value1;
};

btn6.onclick = function(){
   value1 = value1 + '6';
   screen.textContent = value1;
};

btn7.onclick = function(){
   value1 = value1 + '7';
   screen.textContent = value1;
};

btn8.onclick = function(){
   value1 = value1 + '8';
   screen.textContent = value1;
};

btn9.onclick = function(){
   value1 = value1 + '9';
   screen.textContent = value1;
};

btn0.onclick = function(){
   value1 = value1 + '0';
   screen.textContent = value1;
};

btnDelete.onclick = function(){
   value1 = String(value1)
   value1 = value1.slice(0, -1);
   screen.textContent = value1;
};

btnClear.onclick = function(){
   value1 = '';
   screen.textContent = value1;
};

btnDecimal.onclick = function(){
   if(value1.includes('..')){
      console.error('Calculator Error: Already has a decimal point.')
   } else {
      value1 = String(value1);
      value1 = value1 + '.';
      screen.textContent = value1;
   }
};

btnAddition.onclick = function(){
   if(value1.charAt(value1.length - 1) === '/' || value1.charAt(value1.length -1) === '+' || value1.charAt(value1.length -1) === '-' || value1.charAt(value1.length -1) === '*' || value1 === ''){
      console.error("Calculator Error: Syntax Error.")
   } else {
      value1 = String(value1);
      value1 += '+';
      screen.textContent = value1;
      currentOP.textContent = "+";
   }
}

btnMultiplication.onclick = function(){ 
   if(value1.charAt(value1.length - 1) === '/' || value1.charAt(value1.length -1) === '+' || value1.charAt(value1.length -1) === '-' || value1.charAt(value1.length -1) === '*' || value1 === ''){
      console.error("Calculator Error: Syntax Error.")
   } else {
      value1 = String(value1);
      value1 += '*';
      screen.textContent = value1;
      currentOP.textContent = "x";
   }
}

btnDivision.onclick = function(){ 
   if(value1.charAt(value1.length - 1) === '/' || value1.charAt(value1.length -1) === '+' || value1.charAt(value1.length -1) === '-' || value1.charAt(value1.length -1) === '*' || value1 === ''){
      console.error("Calculator Error: Syntax Error.")
   } else {
      value1 = String(value1);
      value1 += '/';
      screen.textContent = value1;
      currentOP.textContent = "÷";
   }
}

btnSubtraction.onclick = function(){ 
   if(value1.charAt(value1.length - 1) === '/' || value1.charAt(value1.length -1) === '+' || value1.charAt(value1.length -1) === '-' || value1.charAt(value1.length -1) === '*' || value1 === ''){
      console.error("Calculator Error: Syntax Error.")
   } else {
      value1 = String(value1);
      value1 += '-';
      screen.textContent = value1;
      currentOP.textContent = "-";
   }
}

btnEqual.onclick = function(){
   if(value1.charAt(value1.length - 1) === '/' || value1.charAt(value1.length -1) === '+' || value1.charAt(value1.length -1) === '-' || value1.charAt(value1.length -1) === '*'){
      console.error("Calculator Error: Calculation can't End with an Operator.")
   } else if(value1 === '') {
      console.error('Calculator Error: No Value')
   } else {
      value1 = eval(value1);
      value1 = String(value1);
      screen.textContent = value1;
      currentOP.textContent = '';
   }
}
   
btnSqrt.onclick = function(){
   if (value1 === ''){
      console.error("Calculator Error: No Value.");
   } else {
      value1 = Number(eval(value1))
      value1 = Math.sqrt(value1);
      screen.textContent = value1;
      value1 = String(value1);
   }
}

btnSqr.onclick = function(){
   if (value1 === ''){
      console.error("Calculator Error: No Value.")
   } else {
      value1 = Number(eval(value1))
      value1 = Math.pow(value1, 2);
      screen.textContent = value1;
      value1 = String(value1);
   }
}

btnLeftBracket.onclick = function(){
   value1 += '(';
   screen.textContent = value1;
   value1 = String(value1);
}

btnRightBracket.onclick = function(){
   value1 += ')';
   screen.textContent = value1;
   value1 = String(value1);
}

btnSignChanger.onclick = function(){
   value1 = String(value1);
   if(value1.charAt(0) == '+'){
      value1 = value1.replace(value1[0], '-')
      screen.textContent = value1;
   }else if (value1.charAt(0) == '-'){
      value1 = value1.replace(value1[0], '')
      screen.textContent = value1;
   }else if(value1.charAt(0) == '1' || value1.charAt(0) == '2' || value1.charAt(0) == '3' || value1.charAt(0) == '4' || value1.charAt(0) == '5' || value1.charAt(0) == '6' || value1.charAt(0) == '7' || value1.charAt(0) == '8' || value1.charAt(0) == '9' || value1.charAt(0) == '0' ){
      value1 = '-' + value1;
      screen.textContent = value1;
   }else if (value1.charAt(0) != '+' || value1.charAt(0) != '-' || value1.charAt(0) != '1' || value1.charAt(0) != '2' || value1.charAt(0) != '3' || value1.charAt(0) != '4' || value1.charAt(0) != '5' || value1.charAt(0) != '6' || value1.charAt(0) != '7' || value1.charAt(0) != '8' || value1.charAt(0) != '9' || value1.charAt(0) != '0' ){
      console.error('Calculator Error: Value is not editable')

   }
}