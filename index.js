const express = require("express");
const app = express();
app.use(express.json());

// Endpoint: /
app.get("/", (_req, res) => {
  res.send("Hell World");
});
// Endpoint: /users
const lista = ["Pikachu", "Charmander", "Squirtle", "Pidgey"];

// [GET] List all Pokémons and quantity of each
app.get("/lista", function (_req, res) {
  res.send(`
  <style>
  *;*::before, *::after {margin: 0; padding: 0; box-sizing: border-box; background: transparent; border: none; outline: none; text-decoration: none; font-family: sans-serif; font-size: 16px; font-weight: normal; color: #000; text-align: left; vertical-align: baseline; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
  html {font-size: 16px; line-height: 1.5; color: #000; background: yellow; font-family: sans-serif;}
  body {display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #fafafa; box-shadow: 0 0 10px rgba(0,0,0,.1)}
  h1 {font-size: 2em; margin: 0.67em 0;}
  h2 {font-size: 1.5em; margin: 0.83em 0;}
  h3 {font-size: 1.17em; margin: 1em 0;}
  p {margin: 0.67em 0;}
  ul {color: white ;list-style: none; margin: 0; padding: 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; outline: solid 1px yellow; background: hsl(222, 25%, 32%);}
  li {color: black; display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin: 0.67em 0; padding: 0.2em 1em; border-bottom: 1px solid #ccc; background-color: cyan;}
  li:hover {background: yellow; transition: background 0.2s;}

  span { 
    background-image: -moz-linear-gradient(0deg, rgb(209, 10, 130), rgb(115, 18, 243));

background-image: -webkit-linear-gradient(0deg, rgb(209, 10, 130), rgb(115, 18, 243));

background-image: linear-gradient(0deg, rgb(209, 10, 130), rgb(115, 18, 243));
    
    ; display: block;  text-align: center;  padding: 16px;  text-decoration: none;  font-size: 5rem;  color: yellow;}


  </style>
  <h1>Lista de Pokémons</h1>
  <h3>Quantidade: <span>${lista.length}</span></h3>
  <ul> Pokémons:  ${lista.map((pokemon) => `<li>${pokemon}</li>`).join("")}
  </ul>
  `);
});

// [GET] List one user
app.get("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  res.send(`Listar Pokémon: ${lista[id]} - Posição: ${id + 1}`);
});

// [POST] Add a new user
app.post("/lista", (req, res) => {
  const newUser = req.body.user;
  lista.push(newUser);
  res.send(`Adicionar novo item ${lista} - ${newUser}`);
});

// [PUT] Update a user
app.put("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  const newUser = req.body.user;
  lista[id] = newUser;
  res.send(`Atualizar item ${lista} - ${newUser}`);
});

// [DELETE] Delete a user
app.delete("/lista/:id", (req, res) => {
  const id = req.params.id - 1;
  lista.splice(id, 1);
  res.send(`Remover item ${lista} - ${id}`);
});

// Error handling
app.use((_req, res) => {
  res.status(404).send("404: Havia algo aqui, mas não há mais.");
});

// Start server: /
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
