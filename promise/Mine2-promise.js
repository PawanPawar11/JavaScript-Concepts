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

console.log(
  setTimeout(() => {
    promisedValue;
  }, 6000)
);
// The explanation for the above console.log() code block will be available in the Mine2-promise.md file
// Short Answer: Mine - the above console.log() runs before the 3 second timer even though we've passed 6 second timer is because the 3 second code is asynchronous, while the console.log() with 6 second timer is synchronous. So the console.log() with 6 second will run for the first 6 second, and in the mean time the resolve with 3 second delay will also get executed. The resolve will be firstly shown because the 3 second finishes earlier, so it will display the resolve message and after that wait for additional 3 second to completely executed the 6 second's console.log() code block.

// Short Answer: ChatGPT - The console.log(setTimeout(..., 6000)) runs immediately and prints a timer ID because setTimeout is a synchronous function that just schedules an async task. The 3-second timer runs independently and completes before the 6-second one, so the promise is resolved and .then(...) is executed before the 6-second function even runs. After 3 more seconds (total of 6), the anonymous function inside setTimeout(..., 6000) runs — but unless it logs something, you won’t see its effect.
