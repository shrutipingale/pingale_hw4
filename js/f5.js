var values = prompt("Please enter a word:");
    if (values == null || values == "") {
      alert("User cancelled the prompt.");
    } else {
      checkVowelPalindrom(values);
    }
function checkVowelPalindrom(str){
    var vowelCount=0,i=0;
    var revStr="";
    var strLen = str.length;
    for(i=(strLen-1);i>=0;i--){
       var ch=str[i];
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            vowelCount++;
        }
        revStr = revStr+ch;
    }
if(revStr === str.toLowerCase()){
        alert(str+" contains "+vowelCount+" vowels and is a palindrome.");
    }else{
        alert(str+" contains "+vowelCount+" vowels and is not a palindrome.");
    }
 }