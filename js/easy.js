/**
 * Reverse a string
 * @param       {String}     str a text string
 * @return reserved string
 */
function FirstReverse (str) {
  let array = str.split('');
  let reversedArray = array.reverse();
  return reversedArray.join('');
}

/**
 * Getting Sum of a positive integer range. For instance 5, 5 + 4 + 3 + 2 + 1.
 * @param       {Integer}     num
 * @return sum of the integer range
 */
function SimpleAdding (num) {
    if (num == 1) {
        return parseInt(num);
    }

  return parseInt(num + SimpleAdding(num - 1));
}

/**
 * Return factorial multiple of a number Efficiency N
 * @param       {[type]}       num
 * @return multiple of the integer range
 */
function FirstFactorial (num) {
  // code goes here
  let all = 1;
  for (let i = num; i > 0; i--) {
      all *= i;
  }

  return parseInt(all);
}

/**
 * Replace letters Efficiency N
 * @param       {String}      str
 * @return new string
 */
function LetterChanges (str) {
  let testStr = str.split("");
  let resultStr = [];
  let inset = 1;
  for (let i = 0; i < testStr.length; i++) {
    let tempChar = testStr[i].charCodeAt() + inset;
    let tempString = String.fromCharCode(tempChar);
      if (testStr[i].match(/[a-z]/i)) {
        if(tempString == 'a' || tempString == 'e' || tempString == 'i' || tempString == 'o' || tempString == 'u') {
            tempString = tempString.toUpperCase();
        }
      } else {
          tempString = testStr[i];
      }
      resultStr.push(tempString);
  }

  return resultStr.join("");
}

/**
 * get longest string from an array. Efficiency N
 * @param       {String}    sen
 * @return the longest word
 */
function LongestWord (sen) {
  // code goes here
  let temp = sen.split(/[^A-Za-z]/);
  let longest = "";
  for (let i = 0; i < temp.length; i++) {
      if(longest.length < temp[i].length) {
          longest = temp[i];
      }
  }

  return longest;
}

/**
 * Make the first letter of each word in uppercase.
 * @param       {String}         str
 * @return the altered text
 */
function LetterCapitalize (str) {
  let arrayLetters = str.split(" ");
  let resultArray = [];
  for (let i = 0; i < arrayLetters.length; i++) {
      resultArray.push(arrayLetters[i][0].toUpperCase());
      for (let l = 1; l < arrayLetters[i].length; l++) {
            resultArray.push(arrayLetters[i][l]);
      }
      resultArray.push(" ");
  }

  return resultArray.join("");
}

/**
 * check if a letter is surrounded by symmetrical symbols
 * @param       {String}      str
 * @return true when all letters have symbols nested; false otherwise
 */
function SimpleSymbols (str) {
  let testArray = str.split("");
  for (let i = 0; i < testArray.length; i++) {
    if(i === 0 && testArray[i].match(/[a-z]/i) || i === testArray.length - 1 && testArray[i].match(/[a-z]/i)) {
      return false;
    }
    // both side not +
    if (testArray[i].match(/[a-z]/i) && testArray[i - 1] != '+' && testArray[i].match(/[a-z]/i) && testArray[i + 1] != "+") {
      return false;
    }
    // left not +
    if (testArray[i].match(/[a-z]/i) && testArray[i - 1] != '+' && testArray[i].match(/[a-z]/i) && testArray[i + 1] == '+') {
      return false;
    }
    // right not +
    if (testArray[i].match(/[a-z]/i) && testArray[i - 1] == '+' && testArray[i].match(/[a-z]/i) && testArray[i + 1] != '+') {
      return false;
    }
  }

  return true;
}

/**
 * CheckNums challenge
 * @param       {int}  num1
 * @param       {int}  num2
 * @return String  true if num1 is less than num2, -1 if both equal, false otherwise
 */
function CheckNums (num1,num2) {
  if (parseInt(num1) < parseInt(num2)) {
    return "true";
  } else if (parseInt(num1) === parseInt(num2)) {
    return "-1";
  }

  return "false";
}

/**
 * Convert Time of minites into Hours and Minutes
 * @param       {String}    num
 * @return the formatted hours and minute
 */
function TimeConvert (num) {
  let hour = Math.floor(num / 60);
  let minute = num % 60;

  return hour + ":" + minute;
}

/**
 * Sort String
 * @param       {String}     str
 * @return the sorted string
 */
function AlphabetSoup(str) {
  let tempArray = str.split('');

  return tempArray.sort().join("");
}
