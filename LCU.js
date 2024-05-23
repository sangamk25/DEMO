function FindlongestNonRepeatedElements(str) {
  let N = str.length;

  let result = "";
  let obj = {};

 
  let count=0;
  for (let i of str ){
    if(!obj[i])
    {
        obj[i]=1;
        str+=i;
        
    }else{
    }
  }
  console.log(obj);
}
let str = "abcdeaabbcdefghbbcdef";

let Result = FindlongestNonRepeatedElements(str);

console.log(Result);

