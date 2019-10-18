function multiplyArr(array){
    var product=1;
    for(var i=0; i<array.length;i++){
        for(var j=0;j<array[i].length;j++){
            product  *= array[i][j];
        } 
    }
    return product;
}
var product = multiplyArr([[1,2],[3,4],[5,6,7]]);
console.log(product);