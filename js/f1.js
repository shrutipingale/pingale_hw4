a= Number(prompt("Enter the first number:"));
b= Number(prompt("Enter the second number:"));
c= prompt("Enter the mathematical operator:");
if (c === '+')
{
    alert(a + "+" + b + "=" + (a+b));
} 
else if (c === '-') {
    alert(a + "-" + b + "=" + (a-b)); 
} 
else if (c === '*') {
    alert(a + "*" + b + "=" + (a*b));
}
else if (c ==='/') {
    alert(a + "/" + b + "=" + (a/b));
}