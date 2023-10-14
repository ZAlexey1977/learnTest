let log = console.log;

//////////////////////////// unit 1 ///////////////////////////////

// function palindrome(str) {
//   str = str.toLowerCase();
//   let myStr = str.split(/[\W_]/);
//   myStr = myStr.join('');
//   myStr = myStr.split('');
//   myStr = myStr.join('');
//   let newStr = str.split(/[\W_]/);
//   newStr = newStr.join('');
//   newStr = newStr.split('');
//   newStr = newStr.reverse();
//   newStr = newStr.join('');
//   log(newStr);
//   log(myStr);
//   if (myStr !== newStr) {
//     return false;
//   }
//   return true;
// }

// log(palindrome("A man, a plan, a canal. Panama"));

/////////////////////////// unit 2 ///////////////////////////////

let numbers = {
  1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
}

function convertToRoman(num) {
  num = String(num);
  let result = [];

  let myNum = num.split('').reverse();
  log(myNum)
  switch (myNum[0]) {
    case '0':
      result.unshift('');
      break;
    case '1':
      result.unshift('I');
      break;
    case '2':
      result.unshift('II');
      break;
    case '3':
      result.unshift('III');
      break;
    case '4':
      result.unshift('IV');
      break;
    case '5':
      result.unshift('V');
      break;
    case '6':
      result.unshift('VI');
      break;
    case '7':
      result.unshift('VII');
      break;
    case '8':
      result.unshift('VIII');
      break;
    case '9':
      result.unshift('IX');
      break;
  }

  switch (myNum[1]) {
    case '0':
      result.unshift('');
      break;
    case '1':
      result.unshift('X');
      break;
    case '2':
      result.unshift('XX');
      break;
    case '3':
      result.unshift('XXX');
      break;
    case '4':
      result.unshift('XL');
      break;
    case '5':
      result.unshift('L');
      break;
    case '6':
      result.unshift('LX');
      break;
    case '7':
      result.unshift('LXX');
      break;
    case '8':
      result.unshift('LXXX');
      break;
    case '9':
      result.unshift('XC');
      break;
  }

  switch (myNum[2]) {
    case '0':
      result.unshift('');
      break;
    case '1':
      result.unshift('C');
      break;
    case '2':
      result.unshift('CC');
      break;
    case '3':
      result.unshift('CCC');
      break;
    case '4':
      result.unshift('CD');
      break;
    case '5':
      result.unshift('D');
      break;
    case '6':
      result.unshift('DC');
      break;
    case '7':
      result.unshift('DCC');
      break;
    case '8':
      result.unshift('DCCC');
      break;
    case '9':
      result.unshift('CM');
      break;
  }

  switch (myNum[3]) {
    case '0':
      result.unshift('');
      break;
    case '1':
      result.unshift('M');
      break;
    case '2':
      result.unshift('MM');
      break;
    case '3':
      result.unshift('MMM');
      break;
    case '4':
      result.unshift('MMMM');
      break;
  }

  return result.join('');
}

log(convertToRoman(2014));

/////////////////////////// unit 3 ///////////////////////////////

/////////////////////////// unit 4 ///////////////////////////////

/////////////////////////// unit 5 ///////////////////////////////

/////////////////////////// unit 6 ///////////////////////////////
