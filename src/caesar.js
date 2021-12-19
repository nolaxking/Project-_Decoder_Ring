// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    
  function caesar(input, shift, encode = true) {
    //return a early fasle if shift is incorrect
    if(shift==0||shift>25||shift<-25)return false
     let result = ""; //empty string to store message
    //if encode is false turn shift turns into a -num to decode the input
    if (encode===false) shift *= -1; 
    //should take input to lowercase
    let text = input.toLowerCase();
    //loop through input
    for (let i = 0; i < text.length; i++) {
      let  char= text[i];
      if (char.match(/[a-z]/)) {
        let shifting = text.charCodeAt(i) + shift;
        //loop the letter back to the start of lowercase charcode
        if (shifting > 122) shifting -= 26;
        //loop the letter to the end of the lowercase charcode
        if (shifting < 97) shifting +=26;
       //turns charcode back ino a string
        let newText = String.fromCharCode(shifting);
        result += newText;
      } else {
        result += char;
      }
    }
    
    return result;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
