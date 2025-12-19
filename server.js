const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());


function readData() {
  return JSON.parse(fs.readFileSync("data.json"));
}


function writeData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

// Test routes

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date() });
});

app.get("/status", (req, res) => {
  res.status(200).send("OK");
});

// Crud routes

// GET
app.get("/tasks", (req, res) => {
  const data = readData();
  res.json(data.tasks);
});

// POST 
app.post("/tasks", (req, res) => {
  const data = readData();

  const newTask = {
    id: data.tasks.length + 1,
    name: req.body.name
  };

  data.tasks.push(newTask);
  writeData(data);

  res.json(newTask);
});

// PUT 
app.put("/tasks/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const task = data.tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  task.name = req.body.name;
  writeData(data);

  res.json(task);
});

// DELETE 
app.delete("/tasks/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  data.tasks = data.tasks.filter(t => t.id !== id);
  writeData(data);

  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
