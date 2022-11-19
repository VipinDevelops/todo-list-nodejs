//Sample Todo objects
const Todos = [
  {
    id: 1,
    title: "Study",
    completed: false,
    createdOn: new Date(),
  },
  {
    id: 2,
    title: "Coding",
    completed: true,
    createdOn: new Date(),
  },
];

//Get all todos function
const getTodos = (req, res) => {
  res.status(201).json(Todos);
};

//Get one todo function
const getTodo = (req, res) => {
  let found = Todos.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
};

//Create one todo function
const postTodo = (req, res) => {
  let itemIds = Todos.map((item) => item.id);

  let newId = itemIds.length > 0 ? Math.max(...itemIds) + 1 : 1;
  let newItem = {
    id: newId,
    title: req.body.title,
    completed: false,
    createdOn: new Date(),
  };

  Todos.push(newItem);
  res.status(201).json(newItem);
};

//Update one todo function
const putTodo = (req, res) => {
  let found = Todos.find((item) => {
    return item.id == parseInt(req.params.id);
  });
  if (found) {
    let updated = {
      id: found.id,
      title: req.body.title,
      completed: req.body.completed,
      createdOn: new Date(),
    };
    let targetIndex = Todos.indexOf(found);
    Todos.splice(targetIndex, 1, updated);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

//Delete One todo function
const deleteTodo = (req, res) => {
  let found = Todos.find((item) => {
    return item.id == parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = Todos.indexOf(found);
    Todos.splice(targetIndex, 1);
  }
  res.sendStatus(204);
};

//Export Functions
module.exports = {
  getTodos,
  getTodo,
  postTodo,
  putTodo,
  deleteTodo,
};
