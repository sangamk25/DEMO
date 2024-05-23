function productSub ( nums){
    let ans = 1;
    let maxProduct = [];

    for (let i = 0; i < nums.length; i++) {
      ans = 1;
      for (let j = i; j < nums.length; j++) {
        ans = ans * nums[j];
        maxProduct.push(ans);
      }
    }
   // console.log(maxProduct);
    let maxNum = -Infinity;
    for (let i = 0; i < maxProduct.length; i++) {
      maxNum = Math.max(maxNum, maxProduct[i]);
    }
    return maxNum;
    
}



let nums = 
  [
    -5, 2, 4, 1, -2, 2, -6, 3, 
  ]

  let result = productSub ( nums);

  console.log(result);
