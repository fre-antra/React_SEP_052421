// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

// function reverseString(str) {
//     console.log(str.split("").reverse().join(""));
// }
// reverseString("32243");


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function palindrome(str){
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     for (var i = 0; i < str.length/2; i++) {
//       if (str[i] !== str[str.length - 1 - i]) {
//           console.log(false);
//       }
//     }
//     console.log(true);
// }
// palindrome("nurses run");

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

// function myFunction(str){
//     let arr = str.split("");
//     for(let i =0; i<arr.length; i++){
//         for(let j = i+1; j<=arr.length; j++){
//             let newStr= arr.slice(i,j).join('');
//             console.log(newStr);
//         }
//     }
// }

// myFunction('dog');

// 4. Write a JavaScript function that returns a passed string with letters in string. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function alphabeticalOrder(str){
//     str = str.toLowerCase().split('').sort().join('');
//     console.log(str);
// }

// alphabeticalOrder("webmaster");

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

// function capitalFir(str){
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
//     }
//     console.log(arr.join(' '));
// }

// capitalFir("the quick brown fox");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

// function findLongest(str){
//     let arr = str.split(' ');
//     var max = arr[0];
//     for(let i =1; i<arr.length; i++){
//         if(arr[i].length > max.length){
//             max=arr[i];     
//         }     
//     }
//     console.log(max);
// }

// findLongest('Web Development Tutorial');

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

// function vowels (str){
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let arr=str.split("");
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         if (arr[i]=='a' ||arr[i]=='e' ||arr[i]=='i' ||arr[i]=='o' ||arr[i]=='u'){
//             count++;
//         }    
//     }
//     console.log(count);
// }
// vowels ('The quick brown fox');

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function primeCheck(x){
//     if (x==1){
//         console.log("1 is not prime number");
//     }else if (x<=0){
//         console.log("please enter number bigger than 1");
//     }else{
//         for (var i=2; i<x; i++) {
//         if (x%i != 0){
//             console.log(x + " is a prime number");
//             break;
//         }else {
//             console.log(x + " is not a prime number"); 
//             break;
//         }
//     }
// }
// }
// primeCheck(97);

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function checkArg(argument){
//     console.log(typeof argument);
// }
// checkArg(null);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
// function matrix(n) {
//     for (let i=0; i < n; i++)
//     {
//       for (let j=0; j < n; j++)
//       {
//            if (i === j)
//            {
//              console.log(' 1 ');
//            }            
//            else 
//             {
//              console.log(' 0 ');}
//             }
//          console.log('----------');
//        }
//    }
// matrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

// function findSecond(arr){
//  arr= [...new Set(arr)].sort();
//  console.log(arr[1],arr[arr.length-2]);
// }
// let arr1 = [1,1,1,1,1,2,9,9,9,9];
// findSecond(arr1);

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }
   
//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         } 
//      else
//         {
//        console.log("It is not a perfect number.");
//         }   
//  } 
// is_perfect(496); 

// 13. Write a JavaScript function to compute the factors of a positive integer. 

// function findFactors(num){
//     if(Number.isInteger(num) && num > 0){
//         for(let i=1; i<=num; i++){
//             if(num % i == 0){
//                 console.log(i);
//             }
//         }
//     }else{
//         console.log("Please enter positive integer")
//     }
// }
// findFactors(28);

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

// function coins(num){
//     let quarter = parseInt(num/25);
//     for(let q = 0; q<quarter; q++){
//         console.log(25);
//     }
//     let dime = parseInt((num % 25) /10);
//     for(let d = 0; d<dime; d++){
//         console.log(10);
//     }
//     let nickel = parseInt((num % 25) %10 / 5);
//     for(let n = 0; n<nickel; n++){
//         console.log(5);
//     }
//     let penny = parseInt((num % 25) %10 % 5);
//     for(let p = 0; p<penny; p++){
//         console.log(1);
//     }
// }
// coins(46);

// better solution
// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(3, 3));


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// function uniqueStr(string){
//     string = [...new Set(string)];
//     return string.join("");   
// }

// console.log(uniqueStr("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

// function count_occur( str ){

// var re = /[^A-Za-z]/g;
// str = str.toLowerCase().replace(re, '');

//   for( let i = 0 ;i < str.length ;i++){ 
//     let count = 0;
//     for( let j = 0 ;j < str.length ;j++){
//       if( str[i] == str[j] && i > j  ){
//        break;
//       }
//       if( str[i] == str[j]){
//         count++;
//       }
//     }
//     if( count > 0)
//     console.log(`${str[i]} occurs ${count} times`);     
//   } 
// }
// count_occur('gfghello GFGHELLO');

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// function binarySearch(array, key){
//     let sortedArray = array.sort();
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (sortedArray[middle] === key) {
//             return 1;
//         } else if (sortedArray[middle] < key) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return -1;
// }
    
// let array = [6,54,85,2,41,75,100];
// console.log(binarySearch(array, 42));

// 19. Write a JavaScript function that returns array elements larger than a number. 

// function findLarger(array, num){
//     let arr=array.sort(function(a, b){return a - b});
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>num){
//             let result = arr.slice(i);
//             return result;
//         }
//     }
//     return "No larger numbers find!";
// }
// console.log(findLarger([6,54,85,2,41,75,100], 10));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));


// *21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
// function combinations(array) {
//     return new Array(1 << array.length).fill().map(
//       (e1, i) => array.filter((e2, j) => i & 1 << j));
//   }
  
//   console.log(combinations([1, 2, 3]).filter(a => a.length >= 2));



// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
// function count_occur(str, letter){
// var re = /[^A-Za-z]/g;
// str = str.toLowerCase().replace(re, '');
// var count = 0;

//   for( let i = 0 ;i < str.length ;i++){ 
//     if( str[i] == letter){
//         count++;
//       }
//     }
//     if( count > 0)
//     console.log(`${letter} occurs ${count} times`);   
//     else
//     console.log("letter is not found");
//   } 
// count_occur('gfghello GFGHELLO', 'x');

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
// function find_FirstNotRepeatedChar(str) {
//     var arra1 = str.split('');
//     var result = '';
//     var ctr = 0;
//     for (var x = 0; x < arra1.length; x++) {
//       ctr = 0; 
//       for (var y = 0; y < arra1.length; y++) 
//       {
//         if (arra1[x] === arra1[y]) {
//           ctr+= 1;
//         }
//       }  
//       if (ctr < 2) {
//         result = arra1[x];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(find_FirstNotRepeatedChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// function bubble_Sort(a){
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++){
//             if (x[i] < x[i+1]){
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//     } while (swapp);
//  return x; 
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// function Longest_Country_Name(arr){
//     var max = [];
//  for(let i=0; i<arr.length; i++){
//      if(arr[i].length > max.length){
//         max = arr[i];
//      }  
//  }
//  return max;
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// *26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
// function sort(names)
// {
//     string="";
//     ss="";
//     namestring=names.split("");

//     for(j=0;j<namestring.length;j++) {
//         for(i=j;i<namestring.length;i++) {
//             if(string.includes(namestring[i]))
//                 break;
//             else
//                 string+=namestring[i];
//          }
//          if(ss.length<string.length)
//              ss=string;
//          string="";
//     }
//     return ss;
// }
// console.log(sort("google.com"));

// *27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
// function is_Palindrome(str1) {
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
//     }
    
//     function longest_palindrome(str1){
    
//     var max_length = 0,
//     maxp = '';
    
//     for(var i=0; i < str1.length; i++) {
//     var subs = str1.substr(i, str1.length);
    
//     for(var j=subs.length; j>=0; j--) {
//     var sub_subs_str = subs.substr(0, j);
//     if (sub_subs_str.length <= 1)
//     continue;
    
//     if (is_Palindrome(sub_subs_str)){
//     if (sub_subs_str.length > max_length) {
//     max_length = sub_subs_str.length;
//     maxp = sub_subs_str;
//     }
//     }
//     }
//     }
    
//     return maxp;
//     }
//     console.log(longest_palindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(message, 3000);

// 29. Write a JavaScript function to get the function name. 
function abc() {
    console.log(abc.name);
}
abc();