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

// function convertToRoman(num) {
//   num = String(num);
//   let result = [];

//   let myNum = num.split('').reverse();
//   log(myNum)
//   switch (myNum[0]) {
//     case '0':
//       result.unshift('');
//       break;
//     case '1':
//       result.unshift('I');
//       break;
//     case '2':
//       result.unshift('II');
//       break;
//     case '3':
//       result.unshift('III');
//       break;
//     case '4':
//       result.unshift('IV');
//       break;
//     case '5':
//       result.unshift('V');
//       break;
//     case '6':
//       result.unshift('VI');
//       break;
//     case '7':
//       result.unshift('VII');
//       break;
//     case '8':
//       result.unshift('VIII');
//       break;
//     case '9':
//       result.unshift('IX');
//       break;
//   }

//   switch (myNum[1]) {
//     case '0':
//       result.unshift('');
//       break;
//     case '1':
//       result.unshift('X');
//       break;
//     case '2':
//       result.unshift('XX');
//       break;
//     case '3':
//       result.unshift('XXX');
//       break;
//     case '4':
//       result.unshift('XL');
//       break;
//     case '5':
//       result.unshift('L');
//       break;
//     case '6':
//       result.unshift('LX');
//       break;
//     case '7':
//       result.unshift('LXX');
//       break;
//     case '8':
//       result.unshift('LXXX');
//       break;
//     case '9':
//       result.unshift('XC');
//       break;
//   }

//   switch (myNum[2]) {
//     case '0':
//       result.unshift('');
//       break;
//     case '1':
//       result.unshift('C');
//       break;
//     case '2':
//       result.unshift('CC');
//       break;
//     case '3':
//       result.unshift('CCC');
//       break;
//     case '4':
//       result.unshift('CD');
//       break;
//     case '5':
//       result.unshift('D');
//       break;
//     case '6':
//       result.unshift('DC');
//       break;
//     case '7':
//       result.unshift('DCC');
//       break;
//     case '8':
//       result.unshift('DCCC');
//       break;
//     case '9':
//       result.unshift('CM');
//       break;
//   }

//   switch (myNum[3]) {
//     case '0':
//       result.unshift('');
//       break;
//     case '1':
//       result.unshift('M');
//       break;
//     case '2':
//       result.unshift('MM');
//       break;
//     case '3':
//       result.unshift('MMM');
//       break;
//     case '4':
//       result.unshift('MMMM');
//       break;
//   }

//   return result.join('');
// }

// log(convertToRoman(2014));

/////////////////////////// unit 3 ///////////////////////////////

// function rot13(str) {
//   str = str.split('');
//   function changeNum(num) {
//     if (num > 90 || num < 65) {
//       num = num;
//     }
//     else if ((num + 13) > 90) {
//       num = 65 + (12 - (90 - num));
//     } else {
//       num = num + 13;
//     }
//     return num;
//   }
//   for (let i = 0; i < str.length; i++) {
//     let myNum = str[i].codePointAt(0);
//     str[i] = String.fromCharCode(changeNum(myNum));
//   }
//   return str.join('');
// }

// log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

/////////////////////////// unit 4 ///////////////////////////////

// function telephoneCheck(str) {
//   let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
//   return regExp.test(str);
// }

// log(telephoneCheck("(555)555-5555"));

/////////////////////////// unit 5 ///////////////////////////////

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = {
    status: '',
    change: []
  };

  let kassa = Object.fromEntries(cid);
  if (change > 100 && kassa['ONE HUNDRED'] > 0) {
    change = change - 100;
  }

  return result;
}

log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/////////////////////////// unit 6 ///////////////////////////////
