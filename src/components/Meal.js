const Meal = ({ meal, handleAddOrders }) => {
  return (
    <article
      key={meal.id}
      onClick={() => {
        handleAddOrders(meal);
      }}
    >
      <div className="text">
        <h3>{meal.title}</h3>
        <p className="meal-description">{meal.description}</p>
        <p>{meal.price} euros</p>
        <p>{meal.popular}</p>
      </div>
      <div>
        <img
          className={meal.picture ? "square-images" : "hidden"}
          src={meal.picture}
          alt="le plat en visuel"
        />
      </div>
    </article>
  );
};

export default Meal;
