import { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://react-http-45232-default-rtdb.firebaseio.com/meals.json'
        );
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();

        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  let content = <p>배달 가능한 음식이 없습니다.</p>;

  if (isLoading) content = <p>로딩 중...</p>;

  if (error) content = <p>{error}</p>;

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && content}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
