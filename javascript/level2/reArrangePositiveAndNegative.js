let arrangedArray = (arr) =>{
    sortPositiveNumbers(arr);
    sortNegativeNumbers(arr);
    return arr;
}

function sortNegativeNumbers(arr){
    let count = 0;
    for (let index1 = 0; index1 < arr.length; index1++) {
        let copy = 0;
        if(arr[index1] < 0){
            copy = arr[index1];
            arr[index1] = arr[count];
            arr[count] = copy;
            count++
        }
    };
}
function sortPositiveNumbers(arr){
    let count = 0;
    for (let index1 = 0; index1 < arr.length; index1++) {
        let copy = 0;
        if(arr[index1] > 0){
            copy = arr[index1];
            arr[index1] = arr[count];
            arr[count] = copy;
            count++;
        }
    };
}

console.log(arrangedArray([10, -1, 20, 4, 5, -9, -6]));