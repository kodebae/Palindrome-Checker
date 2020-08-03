function palindrome(str) { //create a function to check for palindrome
    let initialString =  str.replace(/[\W_]/g, "").toLowerCase(); // create a variable to hold our inital string and set it equal to our string, remove all special characters, set everything to lowercase.
    let reverseString = initialString.split("").reverse().join(""); // create a variable to reverse the string and set it equal to our inital string. Split each string by each individual character, reverse the string, join the string back together. 
    if (initialString !== reverseString) { // Now, if the initial string is not equal to our reverse string return false. 
        return false;
      }
      return true; // if not return true
    }
    palindrome("eye");


