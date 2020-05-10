var numArray = [15,26,3,4,5,56,67];
checkPrime(numArray);
function checkPrime(numArray){
    var fElem = numArray[0];
    if(fElem != 1){
        if(fElem%2!=0){
            console.log("Number is Prime");
        }
    }else{
        console.log("Number not Prime");
    }
    
}
