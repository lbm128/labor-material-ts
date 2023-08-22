import express from 'express';

const port = 4000;
const app = express();
app.use(express.json());

let laborHistory = [];
let materialHistory = [];

app.get('/laborHistory', (_, res) => {
  res.json(laborHistory);
});

app.get('/materialHistory', (_, res) => {
  res.json(materialHistory);
});

app.post('/addLabor', (req, res) => {
  const { calculatedTotal } = req.body;
  if (!calculatedTotal) {
    return res.status(400).end;
  }

  laborHistory.push(calculatedTotal);

  res.json(calculatedTotal);
});

app.post('/addMaterial', (req, res) => {
  const { calculatedTotal } = req.body;
  if (!calculatedTotal) {
    return res.status(400).end;
  }

  materialHistory.push(calculatedTotal);

  res.json(calculatedTotal);
});

app.delete('/todo', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).end();
  }

  todos = todos.filter(todo => todo.id !== id);

  res.status(204).end();
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
