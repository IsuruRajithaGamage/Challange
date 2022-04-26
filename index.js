function reverseString(str) {
  let newString = "";

  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//const hi = "hello";
const inputString = window.prompt("Enter a string");
const result = reverseString(inputString);
//console.log(result);
document.getElementById("demo").innerHTML = result;
