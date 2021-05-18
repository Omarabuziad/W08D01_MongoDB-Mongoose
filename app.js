const express = require("express");
const db = require("./db");
const todoModel = require("./schema");
const app = express();
app.use(express.json());


app.get("/todos", (req, res) => {


  todoModel.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });


});


app.get("/todos/completed", (req, res) => {


  todoModel.find({isCompleted : true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });


});




app.post("/create/todo", (req, res) => {

  const { task , description, deadline, isCompleted, priority } = req.body;

  const toDo = new todoModel({ task , description, deadline, isCompleted, priority });

  toDo
      .save()
      .then((result1) => {
        res.json(result1);
      })
      .catch((err) => {
        res.json(err);
      });

});












app.put("/update/todo/:task", (req, res) => {
  const newTask = req.params.task

  const { task , description, deadline, isCompleted, priority } = req.body;

  //toDo.update({ task: task }, { description }, fn);

  todoModel
  .findOneAndUpdate({task:newTask} ,{description} , {new:true})
  .then((result1) => {
    res.json(result1);
  })
  .catch((err) => {
    res.json(err);
  });


})


app.delete("/delete/todo", (req, res) => {});

















const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


