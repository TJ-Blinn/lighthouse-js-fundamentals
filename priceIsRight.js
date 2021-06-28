var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
/* 
prices [0] = 9.00;
prices [2] = 9.00;
prices [6] = 9.00;
*/

for (var index = 0; index<prices.length; index++){
    //change the value of first element
    if(index===0){
        prices[index]=11;
    }
    //change the value of third element
    else if(index===2){
        prices[index]=33;
    }
    //change the value of seventh element
    else if(index===6){
        prices[index]=77;
    }
}
console.log(prices);
