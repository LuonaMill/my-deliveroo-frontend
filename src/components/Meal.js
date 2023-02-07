const Meal = ({ meal, setIsOrdered, orders, setOrders, index }) => {
  const handleOrders = (index) => {
    const copyOrders = [...orders];
    copyOrders.push(meal.title);
    setOrders(copyOrders);
    setIsOrdered(true);
  };

  return (
    <article
      onClick={() => {
        handleOrders(index);
      }}
    >
      <div className="text">
        <h3>{meal.title}</h3>
        <p className="meal-description">{meal.description}</p>
        <p>
          {meal.price} <span>euros</span>
        </p>
        <p>{meal.popular}</p>
      </div>
      <div>
        <img
          className={meal.picture ? "square-images" : "hidden"}
          src={meal.picture}
          alt=""
        />
      </div>
    </article>
  );
};

export default Meal;
