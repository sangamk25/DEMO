function factorial(N){
       //code here
       let ans=1;
       for(let i=1;i<=N;i++) {
           ans = ans*i;
       }
       return ans;
}
console.log(factorial(5))