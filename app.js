const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});


const toDo = new todoModel({
  task ,
  description,
 deadline,
  isCompleted,
  priority,
});

// using promisees to save a user
toDo
  .save()
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.send(err);
});




const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


