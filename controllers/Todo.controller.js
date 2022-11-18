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

module.exports = {
  getTodos,
  getTodo,
};
