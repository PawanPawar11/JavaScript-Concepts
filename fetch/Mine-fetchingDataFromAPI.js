const urlOfAPI = "https://catfact.ninja/fact";
// Take a URL from the internet that gives you free API responses

let responseOfFetch = await fetch(urlOfAPI);
// Once you fetch the urlOfAPI without using await, you'll get a Response {<pending>}. It is because the Promise is still not resolved, it hasn't told you the status code is 404 (not found), or 200(ok/found something). Use the await, so it will wait till the promise is resolved, the promise will get resolved in two situation, it will either give you 404 or 200.

console.log(
  "This is the response got from responseOfFetch Variable: ",
  responseOfFetch
);

console.log(
  "This is the type of the responseOfFetch Variable: ",
  typeof responseOfFetch
);

let objectAfterPerformingJSONMethod = await responseOfFetch.json();
// Let's say it give you Response with status code - 200. Then it mean it got some data from the URL. So let's store that data inside the variable responseOfFetch. Now the data we received from the URL is in JSON format, and we need to convert it into JavaScript object in order to use it. So we use the .json() method to convert the JSON data into JavaScript object. From MDN Docs: Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

console.log(objectAfterPerformingJSONMethod.fact);
// After the data is converted into JavaScript object with the help of .json() method. We can use the . (dot) operator to access the values inside the object

console.log(objectAfterPerformingJSONMethod.length);
// After the data is converted into JavaScript object with the help of .json() method. We can use the . (dot) operator to access the values inside the object
