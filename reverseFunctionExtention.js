function reverseString(str) {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}

// reverseString("hello");
console.log(reverseString("Thanks for improving ourJs and wont late again"));
