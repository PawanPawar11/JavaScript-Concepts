// Creating a new Promise instance using the Promise constructor
// A Promise represents a value that may be available now, later, or never
const promisedValue = new Promise((resolve, reject) => {
  // The Promise constructor expects a function with two parameters: resolve and reject
  // - resolve: call this when the operation succeeds
  // - reject: call this when the operation fails

  let a = 2; // This controls the logic for which block runs

  if (a == 1) {
    // If a is 1, resolve the Promise after 5 seconds
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 1" });
    }, 5000);
  } else if (a == 2) {
    // If a is 2, resolve the Promise after 3 seconds
    setTimeout(() => {
      resolve({ msg: "The Promise got resolved in block 2" });
    }, 3000);

    // This log runs immediately — it’s outside the setTimeout, so not delayed
    console.log("The Promise which bypasses the 5-second lock in block 2");

    // ⚠️ Important: If you write setTimeout(resolve(...), 3000)
    // it will immediately call resolve(), ignoring the delay
    // Always pass a function (like: () => resolve(...)) to setTimeout
  } else {
    // If a is neither 1 nor 2, reject the Promise immediately
    reject({ msg: "The Promise got rejected in block 3" });
  }
});

// Handling the resolved or rejected promise using .then() and .catch()
promisedValue
  .then((message) => {
    // This will run only if the promise is resolved
    console.log(message); // Logs the resolved object: { msg: "..." }
    console.log("The received message is: " + message.msg); // Logs the message inside the object
  })
  .catch((message) => {
    // This will run only if the promise is rejected
    console.log(message); // Logs the rejected object: { msg: "..." }
    console.log("The received message is: " + message.msg); // Logs the message inside the object
  });

console.log(promisedValue);
// This logs: Promise { <pending> }
// Why? Because the promise hasn’t settled (resolved/rejected) yet when this line runs
// Promises are asynchronous, so this log happens before the 3-second delay finishes

// Note:
// - `new Promise(...)` always returns a Promise object.
// - `Promise { <pending> }` means it's still waiting to be resolved or rejected.
// - The object nature is because everything returned using `new` is technically an object in JavaScript.
