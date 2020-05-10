var actString = "The Quick Brown Fox" ;
var newStrArray = actString.split(" ");
var newSentenceArray = [];
for(var i=0;i<newStrArray.length;i++){
   var letters = newStrArray[i].split("");
   var word = "";
   for(var j=0;j<letters.length;j++){
      
      if(letters[j]=== letters[j].toLowerCase()){
         word = word + letters[j].toUpperCase();
      }else{
         word = word + letters[j].toLowerCase();
      }
      
   }
   newSentenceArray.push(word);

}
var newSentence = "";
for(var i=0;i<newSentenceArray.length;i++){

   newSentence = newSentence+" "+newSentenceArray[i];
}
newSentence = newSentence.trim();
console.log(newSentence);
