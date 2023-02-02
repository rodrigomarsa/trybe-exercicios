const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
})

// app.put('/teams/:id', existingId, validateTeam, (req, res) => {
//   const { id } = req.params;
//   const { name, initials } = req.body;

//   const updateTeam = teams.find((team) => team.id === Number(id));

//   if (!updateTeam) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   updateTeam.name = name;
//   updateTeam.initials = initials;
//   res.status(200).json({ updateTeam });
// });

// app.delete('/teams/:id', existingId, (req, res) => {
//   const { id } = req.params;
//   const arrayPosition = teams.findIndex((team) => team.id === Number(id));
//   teams.splice(arrayPosition, 1);

//   res.status(200).end();
// });

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  // não precisamos mais conferir, com certeza o team existe
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;