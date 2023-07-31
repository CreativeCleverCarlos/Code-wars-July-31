
/**
 Given the triangle of consecutive odd numbers:
**/

function sumOfNthRow(n) {
    if (n === 1) return 1; //first make it so that if the number given is 1, because it's only 1, return one...
  
    let startNumber = 1;
    let sum = 1;
  
    for (let row = 2; row <= n; row++) {
      // Increment the startNumber by 2 to get the first number of the current row
      startNumber += 2;
  
      // Calculate the sum of the current row
      let rowSum = startNumber;
      for (let i = 1; i < row; i++) {
        startNumber += 2; // Increment by 2 to get the next odd number in the row
        rowSum += startNumber;
      }
  
      sum = rowSum;
    }
  
    return sum;
  }
  
  console.log(sumOfNthRow(3));

  /**
 Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]  
**/

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)] 
  }

  console.log(minMax([1,2,3,4,5]))