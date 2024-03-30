import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import express from 'express';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({
      error: "malformatted parameters"
    });
  } else {
    res.json({
      height,
      weight,
      bmi: calculateBmi(Number(height), Number(weight)),
    });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (typeof daily_exercises === 'undefined' || typeof target === 'undefined') {
    res.status(400).json({
      error: "parameters missing"
    });
    return;
  }

  if (!(daily_exercises instanceof Array) ||
  daily_exercises.some((x) => typeof x !== 'number') ||
  typeof target !== 'number') {
    res.status(400).json({
      error: "malformatted parameters"
    });
    return;
  }

  res.json(calculateExercises(daily_exercises as number[], target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});