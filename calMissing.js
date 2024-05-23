function fillMissingNumbers(inputSequence,n) {
  let outputSequence = [];
  for (let i = 1; i <= 10; i++) {
    let temp = i * n;

    if(!inputSequence.includes(temp)){
        outputSequence.push(temp)
    }
    // for (let j = 0; j < inputSequence.length; j++) {
    //   if (inputSequence[j] === temp) {
    //     break;
    //   } else if (j === inputSequence.length - 1) {
    //     outputSequence.push(temp);
    //   }
    // }
  }
  return outputSequence;
}

const inputSequence = [10, 20, 40, 60];
const n = 10;
const outputSequence = fillMissingNumbers(inputSequence ,n);
console.log(outputSequence);
