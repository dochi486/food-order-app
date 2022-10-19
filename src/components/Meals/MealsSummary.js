import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>배달 가능한 맛있는 요리들</h2>
      <p>모든 음식은 좋은 재료와 정성을 들여 만듭니다!</p>
    </section>
  );
};

export default MealsSummary;
