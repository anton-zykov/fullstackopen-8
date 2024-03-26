type BMICategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obese';

const calculateBmi = (height: number, weight: number): BMICategory => {
  const BMI = weight / (height / 100) ** 2;
  if (BMI < 18.5) return 'Underweight';
  if (BMI < 25) return 'Normal';
  if (BMI < 30) return 'Overweight';
  return 'Obese';
};

console.log(calculateBmi(180, 74));