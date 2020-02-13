function sumFor(array) {
  let sum = 0;
  for (let val of array) {
    sum += val;
  }
  return sum;
}

const testArray = [1,2,3,4,5];

console.log(sumFor(testArray));

function sumWhile(array) {
  let sum = 0;
  let index = 0;
  while (index < array.length) {
    sum += array[index];
    index++;
  }
  return sum;
}

console.log(sumWhile(testArray));

function sumRecurse(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumRecurse(array.slice(1, array.length));
  }
}

console.log(sumRecurse(testArray));

function sumTheSimpleWay(array) {
  return _.reduce(array, (memo, num) => memo + num, 0);
}

console.log(sumTheSimpleWay(testArray));