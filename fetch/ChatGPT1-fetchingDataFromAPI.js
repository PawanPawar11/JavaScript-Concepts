const urlOfAPI = "https://catfact.ninja/fact";
// ✅ This is a free API URL that returns a random cat fact in JSON format.

let responseOfFetch = await fetch(urlOfAPI);
// ✅ fetch() returns a Promise. If you don't use 'await', the Promise will be in a pending state.
// ✅ 'await' waits for the fetch to complete and gives you a Response object.
// ✅ The response has status codes like 200 (success) or 404 (not found).

console.log("Response object:", responseOfFetch);
console.log("Type of response:", typeof responseOfFetch);
// ✅ The response is an object of type: Response

let objectAfterPerformingJSONMethod = await responseOfFetch.json();
// ✅ The .json() method reads the response body and parses it into a JavaScript object.
// ✅ Despite being called .json(), the result is a JS object (not a JSON string).
// 🔎 From MDN: "The result is not JSON but the result of parsing JSON into a JS object."

console.log("Cat Fact:", objectAfterPerformingJSONMethod.fact);
// ✅ Accessing the 'fact' field from the response object using dot notation.

console.log("Length of Fact:", objectAfterPerformingJSONMethod.length);
// ✅ If 'length' exists in the response, this prints it. Some APIs return additional metadata.
