// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    //return false if alphabet is not 26 char or 0
    if(!alphabet||alphabet.length !==26 )return false
   
   //see if the subsitution alphabet repeats 
   
   let repeater=alphabet.split("").sort().join("").match(/(.)\1+/g )
    if(repeater)return false
   
    //split the alphabet string
    let subAlphbet= alphabet.split("")
    let=alpha =  [ "a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    ];
    //helper function
    function plugIn(str1,str2){
      let results = ""
      let text = input.toLowerCase()
      //loop the input string 
      for (let i = 0; i < text.length; i++){

          let text2 = text[i]
        //see if text2 have a match turns text2 into a array 
        if(text2.match(/[^  ]/s)){
          //indexOf the fisrt parameter 
          
          let text3=str1.indexOf(text2)
          results+=str2[text3]

        }else{
          results+=text2
        }

      }
      return results
    }
    //encodes the input
    if(encode){
    
      let encoded=plugIn( alpha,subAlphbet) 
      return encoded
    }
    //decode the input
    else{
      let decoded= plugIn(subAlphbet,alpha)
      return decoded
    }
    
  }



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
