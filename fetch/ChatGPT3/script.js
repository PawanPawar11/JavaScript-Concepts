// Step 1: Fetch data from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Convert response to JSON
  // ChatGPT is dumb af for saying that the response.json() convert the response to JSON. Aba ise kon samjaye ki .json() actually me json kon js object me convert karta hai.
  .then((users) => {
    const list = document.getElementById("userList");

    // Step 2: Loop through users and display in browser
    users.forEach((user) => {
      const item = document.createElement("li");
      item.textContent = `${user.name} - ${user.email}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
