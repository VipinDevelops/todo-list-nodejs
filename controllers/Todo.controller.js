const Todos = [
  {
    id: 1,
    title: "Study",
    completed: false,
  },
  {
    id: 2,
    title: "Coding",
    completed: true,
  },
];
const getTodos = (req, res) => {
  res.status(201).json(Todos);
};

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

const postTodo = (req, res) => {
  let itemIds = Todos.map((item) => item.id);

  let newId = itemIds.length > 0 ? Math.max(...itemIds) + 1 : 1;
  let newItem = {
    id: newId,
    title: req.body.title,
    completed: false,
  };

  Todos.push(newItem);
  res.status(201).json(newItem);
};

const putTodo = (req, res) => {
  let found = Todos.find((item) => {
    return item.id == parseInt(req.params.id);
  });
  if (found) {
    let updated = {
      id: found.id,
      title: req.body.title,
      completed: req.body.completed,
    };
    let targetIndex = Todos.indexOf(found);
    Todos.splice(targetIndex, 1, updated);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

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
module.exports = {
  getTodos,
  getTodo,
  postTodo,
  putTodo,
  deleteTodo,
};
