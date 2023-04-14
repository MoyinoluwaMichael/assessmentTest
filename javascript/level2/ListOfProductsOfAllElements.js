let listOfProductsOfAllElements = (list) =>{
    let copy = new Array(list.length);
    for (let index1 = 0; index1 < list.length; index1++) {
        let product = 1;
        for (let index2 = 0; index2 < list.length; index2++) {
            if(index1 != index2){
                product *= list[index2];
            }
        }
        copy[index1] = product;
    }
    return copy;
}

console.log(listOfProductsOfAllElements([1,2,3,4]));