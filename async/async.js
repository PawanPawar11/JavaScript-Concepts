// async-await make it seem that the code is executing synchronously while the code being asynchronous

const firstAsyncBlock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Block executed under the function firstAsyncBlock");
      resolve(); // Resolve the promise after the timeout
    }, 5000);
  });
};

const secondAsyncBlock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Block executed under the function secondAsyncBlock");
      resolve(); // Resolve the promise after the timeout
    }, 4000);
  });
};

const thirdAsyncBlock = async () => {
  console.log("Hello 1");
  await firstAsyncBlock(); // Wait for firstAsyncBlock to finish
  console.log("Hello 2");
  await secondAsyncBlock(); // Wait for secondAsyncBlock to finish
};

thirdAsyncBlock();

// The below line of code will be executed like a normal synchronous code, but the code block within the async-await will be executed asynchronously but it will seem like it's getting executed synchronously
console.log("Hi");
console.log("Hola");
setTimeout(() => {
  console.log("Namaste");
}, 1000);
setTimeout(() => {
  console.log("Konnichiwa");
}, 10000);
