// 💡 Bonus: Cleaner Version for Practice

const url = "https://catfact.ninja/fact";

const response = await fetch(url);
console.log("Response object:", response);
console.log("Response type:", typeof response);

const data = await response.json();
console.log("Cat Fact:", data.fact);
console.log("Fact Length:", data.length);
