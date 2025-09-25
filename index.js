function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then((response) => response.json())
    .then((object) => {
      // append new id to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `New user created with ID: ${object.id}`;
      body.appendChild(p);
      return object;
    })
    .catch((error) => {
      // append error message to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = error.message;
      body.appendChild(p);
    });
}

