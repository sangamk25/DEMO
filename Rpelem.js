
function FindRepeatedElement(str){
    let N = str.length;
   
let result ="";
    let hashTable = new Map();
     for ( let i =0 ; i < N ; i++){
           hashTable.set(str[i],(hashTable.get(str[i]) || 0) + 1);
         }
          for ( let i =0; i<hashTable.size ;i++){
            let count = hashTable.get(str[i]);
            if(count > 1){
                result =str[i];
            }
          }

          return result;
     }

  let str = "abcdea";

  let Result =  FindRepeatedElement( str);
  console.log(Result);