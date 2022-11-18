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
  //Get the id of last items
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

module.exports = {
  getTodos,
  getTodo,
  postTodo,
};
