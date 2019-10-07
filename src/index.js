module.exports = function zeros(expression) {
  let numbers = expression.split("*");
  let num;
  let result = [];
  let count;
  let countZeros = 0;

  for(let i = 0; i < numbers.length;i++){
    if(numbers[i].slice(-2) == "!!"){
      num = BigInt(numbers[i].slice(0,-2));
      count = BigInt(2);   
    }
    else {
      num = BigInt(numbers[i].slice(0,-1));
      count = BigInt(1);
    }
    result[i] = num;
    num = num - count;
    while(num >= 1){
      result[i] *= num;
      num -= count;
    }
  }
  let res = BigInt(1);
  for(let j = 0; j < result.length; j++){
    res *= result[j];
  }

  while( res % 10n === 0n){
    res = res / 10n;
    countZeros++;
  }

  return countZeros;
}
