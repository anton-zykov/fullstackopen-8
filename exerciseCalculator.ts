type Rating = 1 | 2 | 3;
type RatingDescription = 'Practice more!' | 'Keep up!' | 'Well done!';

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: Rating;
  ratingDescription: RatingDescription;
  target: number;
  average: number;
}

const calculateExercises = (dailyExerciseHours: number[], targetAmount: number): Result => {
  const average = dailyExerciseHours.reduce((sum, h) => (sum + h)) / dailyExerciseHours.length;
  const partOfTarget = average / targetAmount;
  const rating = partOfTarget < 0.5 ? 1 : partOfTarget < 1 ? 2 : 3;
  return {
    periodLength: dailyExerciseHours.length,
    trainingDays: dailyExerciseHours.filter((h) => h > 0).length,
    success: average >= targetAmount,
    rating,
    ratingDescription: rating === 1 ? 'Practice more!' : rating === 2 ? 'Keep up!' : 'Well done!',
    target: targetAmount,
    average,
  };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));