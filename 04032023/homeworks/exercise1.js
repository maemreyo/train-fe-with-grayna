// // function checkAraay(input) {
// //   if (Array.isArray(input)) return true;
// //   return false;
// // }
// // console.log(checkAraay("name", "thagn:5"));

// // EX2:-------------------

// const arrCopy =(input) =>{
//   return input.slice(0);

// }
// console.log(arrCopy([1,2,3,5]));

// EX3:----------------------------Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

// const arr= (arr,n=1) =>{

//   if(Array.isArray(arr) && n>0){
//     return arr.slice(0,n);
//   }
// }
// console.log(arr([1,2,3,4,5,6],6));

// Ẽ4:
// const arr= (arr,n=arr.length-1) =>{
//   if(Array.isArray(arr) && n>0){
//    return arr.slice(n,arr.length);
//  }
// }
// console.log(arr([1,2,3,4,5,6],-1));

//  EX6: Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// function strNumber(num) {
//   const str = num.toString();
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
//       result += str[i] + "-";
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(strNumber(586));

// // EX7;
// function srt(arry1){
// return arry1.sort(function(a, b){return a - b});
// }console.log(srt([ -3,8,7,6,5,-4,32,3,2,1]))

// EX8: find the most frequent item of an array!
// const mostChar = [0];
// let max = 1;
// const checkChar = (arr) => {
//   console.log(arr.sort());
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//       max += 1;
//       if (max > mostChar[0]) {
//         mostChar.splice(0, 2, max, arr[i]); /* case: 2 kí tự cùng bằng số lần max ????? */
//       }

//     } else {
//       max = 1;
//     }
//   }
// };
// checkChar(["a", "a", "ab", 1, 18, 1, 1]);
// console.log(mostChar);
//  Ex9

// var str="blalab Aasdf SfDsdsSDSSddDDDSS";
// var newStr='';
// for(let i=0;i<str.length;i++){
//     if(str[i]==str[i].toUpperCase()){
//          newStr+=str[i].toLowerCase();
//     }else if(str[i]==str[i].toLowerCase()){
//          newStr+=str[i].toUpperCase();
//     }
// }
        
// // console.log(newStr); 
//   Ex11. Write a JavaScript program to find the sum of squares of a numeric vector  
// const sumOfsquare=[1,5];
// let result=0;
// for(let i of sumOfsquare){
//  result += Math.pow(i,2)
// }
// console.log(result);
