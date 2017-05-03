var array_input = [];
function translate(sentence){
  var split_word = sentence.split(" ");
  //Look through array split_word, and check each of the first letter of each word.
  var changed_word = [];
  //create a array to store the newly modified sentence
  var modified_sentence = [];
  split_word.forEach(function(word){
    var letters = word.split("");
    var letter = letters[0];
    var ascii_index = letter.charCodeAt(0);
    // debugger;
    if(letters[0] === "A" || letters[0] === "E" || letters[0] === "I" || letters[0] === "O" || letters[0] === "U" || letters[0] === "a" || letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u"){
      console.log(letters[0])
      //by default, word is not an array. Use .split on word to make it an array then store that value into word_array. Add "way" to word_array using push then join the array and remove ","
      var word_array = word.split();
      word_array.push("way");
      changed_word = word_array.join("");
      modified_sentence.push(changed_word);
      console.log(modified_sentence);
      // console.log(changed_word);
    }
    //None alphabetical characters

    else if (32<=ascii_index && ascii_index <=64 || 90<ascii_index && ascii_index<97 || 122<ascii_index && ascii_index<128){
      modified_sentence.push(word);
      console.log(ascii_index);
      console.log(modified_sentence);
    }

    //consonants
    else if (letters[0] !== "q" && letters[0] !== "Q") {
      var consonants= [];
      // debugger;
      for(i=0; i<letters.length; i++){
        console.log(letters[i]);
        debugger;

        if(letters[i] !== "A" && letters[i] !== "E" && letters[i] !== "I" && letters[i] !== "O" && letters[i] !== "U" && letters[i] !== "a" && letters[i] !== "e" && letters[i] !== "i" && letters[i] !== "o" && letters[i] !== "u" ) {
          //create an array to store consonants after each iteration

          console.log(i);
          consonants.push(letters[i]);


          console.log(consonants);
          // console.log(splice_letters);
        }
        if(letters[i] === "A" || letters[i] === "E" || letters[i] === "I" || letters[i] === "O" || letters[i] === "U" || letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u"){
          var splice_letters = letters.splice(-(letters.length-i),letters.length-i)
          console.log(splice_letters);
          break
        }


      }
    }



  });
}






$(function(){
  $("form#piglatin").submit(function(event){
    event.preventDefault();

    array_input = $("input#user_input").val();
    translate(array_input);
    console.log(array_input)





    // var modified_sentence
    // $("#output").text(modified_sentence)

  });
});
