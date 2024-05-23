//Async-Await
//EX-1
async function fetchData() {
  // Simulate an asynchronous operation (e.g., network request)
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
  console.log(result); // 'Data received' after 1 second
}

fetchData();


//EX-2

console.log("Start");
async function asyncFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("End");
}
asyncFunction();
console.log("Waiting...");


//Promises - A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to attach callbacks to handle the success (resolve) or failure (reject) of the operation.

//Ex-1
console.log("Start");
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("End");
  }, 1000);
}).then((message) => {
  console.log(message);
});
console.log("Waiting...");

//Ex-2

let promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., network request)
  setTimeout(() => {
    resolve("Operation successful");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // 'Operation successful' after 1 second
  })
  .catch((error) => {
    console.log(error);
  });





// CALLBACKS

function fetchData(callback) {
  // Simulate an asynchronous operation (e.g., network request)
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((result) => {
  console.log(result); // 'Data received' after 1 second
});


//Callbacks - A Callback is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

console.log("Start");
setTimeout(() => {
  console.log("End");
}, 1000); // 1 second delay
console.log("Waiting...");

