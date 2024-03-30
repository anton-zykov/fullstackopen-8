import { IcalculateBmi } from './bmiCalculator';
import { IcalculateExercises } from './exerciseCalculator';

export const parseArgumentsBmi = (args: string[]): IcalculateBmi => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const parseArgumentsExercises = (args: string[]): IcalculateExercises => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const possibleDays = args.slice(2, -1).map(Number);
  if (!possibleDays.some(isNaN) && !isNaN(Number(args.at(-1)))) {
    return {
      dailyExerciseHours: possibleDays,
      targetAmount: Number(args.at(-1)) 
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};
