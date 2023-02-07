import Meal from "./Meal";

const Category = ({
  category,
  isOrdered,
  setIsOrdered,
  orders,
  setOrders,
  index,
  counter,
  setCounter,
  price,
  setPrice,
}) => {
  return (
    <section className="category">
      <h2>{category.name}</h2>
      <div>
        {category.meals.map((meal, index) => {
          return (
            <Meal
              meal={meal}
              key={meal.id}
              isOrdered={isOrdered}
              setIsOrdered={setIsOrdered}
              orders={orders}
              setOrders={setOrders}
              index={index}
              counter={counter}
              setCounter={setCounter}
              price={price}
              setPrice={setPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Category;
