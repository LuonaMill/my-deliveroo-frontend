const Meal = ({
  meal,
  setIsOrdered,
  orders,
  setOrders,
  index,
  counter,
  setCounter,
  price,
  setPrice,
}) => {
  const handleOrders = (index) => {
    setCounter(counter + 1);

    const copyOrders = [...orders];
    copyOrders.push({
      title: meal.title,
      counter: counter,
      price: meal.price,
    });
    setOrders(copyOrders);
    const copyPrice = [...price];
    copyPrice.push(Number(meal.price));
    setPrice(copyPrice);
    setIsOrdered(true);
  };

  return (
    <article
      key={meal.id}
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
