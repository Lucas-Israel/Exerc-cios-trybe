let nome = "arara";

function palindrome(a) {
    let re 
    let lowRegStr = a.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }

console.log(palindrome(nome));
