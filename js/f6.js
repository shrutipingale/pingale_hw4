let a = Math.floor((Math.random() * 100) + 1); 
let c=0;
let correct = false;
console.log(a);
while(!correct)
{
   let guess = prompt("Guess the random number from 1 to 100.");
   if(a == guess) 
   {     
       correct=true;
       alert("Correct! It took you "
               + c + " attempts to guess the correct number "); 
   } 
   else if(a < guess) 
   {     
       c++; 
       alert("Too high, guess again"); 
   } 
   else
   { 
       c++; 
       alert("Too low, guess again") 
   } 
}