import { parseArgumentsBmi } from './parseArguments';

export interface IcalculateBmi {
  height: number;
  weight: number;
}

type BMICategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obese';

export const calculateBmi = (height: number, weight: number): BMICategory => {
  const BMI = weight / (height / 100) ** 2;
  if (BMI < 18.5) return 'Underweight';
  if (BMI < 25) return 'Normal';
  if (BMI < 30) return 'Overweight';
  return 'Obese';
};

if (require.main === module) {
  try {
    const { height, weight } = parseArgumentsBmi(process.argv);
    console.log(calculateBmi(height, weight));
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
}