let values = []
let a = prompt("Enter the word:");
while (a.toLowerCase() != 'stop') 
{
    values.push(a);
    a=prompt("Enter more words");
}
if (values.length == 0)
{
    alert("No words to display. Stop was the first word you entered.");
}
else 
{
   alert(`${values}`);
}