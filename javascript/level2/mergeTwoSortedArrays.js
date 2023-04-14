let sortedArrays = (arr1, arr2) => {
    let sortedArrays = [...arr1, ...arr2];
    let copy = 0;
    for (let index1 = 0; index1 < sortedArrays.length; index1++) {
        for (let index2 = index1+1; index2 < sortedArrays.length; index2++) {
            if(sortedArrays[index1] > sortedArrays[index2]) {
                copy = sortedArrays[index1];
                sortedArrays[index1] = sortedArrays[index2];
                sortedArrays[index2] = copy;
            }
        }
    }
    return sortedArrays;
}

console.log(sortedArrays([1,3,4,5], [2,6,7,8]));

