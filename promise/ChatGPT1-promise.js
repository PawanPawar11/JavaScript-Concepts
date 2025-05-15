const promisedValue = new Promise((resolve, reject) => {
  // In JavaScript, Promise is a built-in constructor function used to create promise objects, which represent the eventual result of an asynchronous operation.

  // The Promise constructor takes a function as an argument, which itself takes two parameters: resolve (to mark the promise as fulfilled) and reject (to mark it as failed).

  let a = 2;

  if (a == 1) {
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 1" });
    }, 5000);
  } else if (a == 2) {
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 2" });
    }, 3000);
    // setTimeout schedules a function to run after a delay (3 seconds in this case). If we pass resolve(...) directly instead of wrapping it in a function, it gets executed immediately, and setTimeout doesn't delay anything.

    console.log("The Promise which bypass the 5 second lock in block 2");
    // The console.log() runs immediately because setTimeout is asynchronous. The resolve will run after 3 seconds, so the log will appear before the promise is resolved.
  } else {
    reject({ msg: "The Promise got rejected in block 3" });
  }
});

promisedValue
  .then((message) => {
    console.log(message);
    // Message object will be printed here
    console.log("The received message is: " + message.msg);
    // The value inside the message object will be printed here
  })
  .catch((message) => {
    console.log(message);
    console.log("The received message is: " + message.msg);
  });

console.log(promisedValue);
// console.log(promisedValue) prints the Promise object. Initially, it will show as Promise { <pending> }, which means it's still waiting (asynchronous). It shows pending because the resolve() hasn’t been called yet.

// The term "object" is just because everything created using new (like new Promise) in JavaScript is technically an object.
