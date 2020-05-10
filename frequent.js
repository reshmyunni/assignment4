var freqArray = [5, 10, 11, 22, 10, 30, 10, 22];
console.log(`array:${freqArray}`);
findFreqItem(freqArray);
function findFreqItem(freqArray) {
    var item;
    var occ = 0;

    var itemC = 1;
    var freqItem;
    for (var i = 0; i < freqArray.length; i++) {
        item = freqArray[i];


        for (var j = 0; j < freqArray.length; j++) {
            if (item == freqArray[j]) {

                occ++;
            }
        }
        if (occ >= itemC) {
            itemC = occ;
            freqItem = item;
            occ = 0;

        } else {
            occ = 0;
        }


    }
    if (itemC == 0) {
        console.log(`No frequent item`);
    } else {
        console.log(`Most frequent item is ${freqItem}`);
    }

}