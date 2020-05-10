var numCharacter = 5;
var string = "hello world";
truncate(string);
function truncate(string){
    if(string.length>numCharacter){
        string = string.substring(0,5);
    }
    console.log(string);
}
