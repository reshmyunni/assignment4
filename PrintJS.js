var string = "Javascript";
var stringArray = string.split("");
console.log(stringArray);
for(var i=1;i<=stringArray.length;i++);
{
    var letters= "";
    for(var j=0;j<i-1;j++){
        letters = letters + stringArray[j];
        console.log(letters);
    }
    
}
