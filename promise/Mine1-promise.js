const promisedValue = new Promise((resolve, reject) => {
  // From the web: In JavaScript, Promise is a constructor function used to create promise objects. It is not an object itself, but rather a blueprint for creating objects that represent the eventual result of an asynchronous operation. When you use the new keyword with Promise, you are invoking the constructor to create a new promise instance.

  // The Promise constructor expect an argument as an function, inside that function there will be two arguments, resolve and reject.

  let a = 2;

  if (a == 1) {
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 1" });
    }, 5000);
  } else if (a == 2) {
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 2" });
    }, 3000);
    // The setTimeout will executed the function which contains resolve after 3 seconds, if we don't pass the function, then it will immediately pass the resolve without waiting for the 3 seconds.
    // This will be executed after 5 seconds are completed, and before this code block the below console.log() block will be executed first.
    console.log("The Promise which bypass the 5 second lock in block 2");
    // This will be executed first
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
// This will return a Promise object which will be pending. It return a Promise object because -
// 1. It promises you that it will return something and it is in pending block so it is Promise
// 2. Object because the <pending> stage is in curly braces i.e., is in object
