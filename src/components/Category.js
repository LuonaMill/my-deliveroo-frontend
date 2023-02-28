import Meal from "./Meal";

const Category = ({ category, handleAddOrders }) => {
  return (
    <section className="category">
      <h2>{category.name}</h2>
      <div>
        {category.meals.map((meal, index) => {
          return (
            <Meal key={meal.id} meal={meal} handleAddOrders={handleAddOrders} />
          );
        })}
      </div>
    </section>
  );
};

export default Category;
