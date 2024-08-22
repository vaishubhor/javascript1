//if statement
/*let age = 16;

if(age >= 18){
    console.log("You can vote");
}

if(age < 18){
    console.log("You CANNOT vote");   
}*/

/*let mode = "dark";
let color;
if(mode ==="dark"){
    color= "black";
}
if(mode ==="light"){
    color= "white";
}
console.log(color);*/


//if else statement
//age print
let age =16
if(age>=18){
 console.log("vote");
}
else{
    console.log("not vote");
}
//color  print 

let mode="blue"
let color ;
 if(mode ==="dark"){
    color = "black";
 }
  else{
    color="white";
  }
   console.log(color);


//odd or even Number
let num = 15;
if(num % 2 === 0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}

//multiple statement 
//else if statement 

let mode1="silver"
let color1;
if(mode1 ==="dark"){
  color1 = "black";
}
else if(mode1==="pink"){
  color1 = "pink";
}
else if(mode1 ==="yellow"){
    color1 = "yellow";
}
else if(mode1 ==="blue"){
    color1="blue";
}
else{
    color1="white";
}
console.log(color1);

//practice question

let number = prompt("hello");
if(number % 5 ===0){
    console.log("num","is multiple of 5");
}
else{
    console.log("num","is NOT multiple of 5");
}

//Loops in Javascript
//Print 1 to 5 Numbers

for(let i=1;i<=5;i++){
 console.log("MMAEC");
}

//Calculate 1 to 5 Numbers
let sum=0;
let n=8
for(let i=1;i<=n;i++){
    sum=sum + i;
}
console.log("sum= ",sum);

//WHILE LOOP
let i=1;
while(i<=6){
    console.log("MMEAC");
    i++;
};
//Do while loop

let j=20;
do{
    console.log("MMEAC");
    j++;
}
while(j<=10);

//print 1 to 5 numbers in Do-while loop
let x=1;
do{
    console.log("x=",x);
    x++;
}while(x<=5);



