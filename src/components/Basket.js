const Basket = ({ orders, handleRemoveOrders, handleAddOrders }) => {
  let total = 0;

  return (
    <section className="right">
      {orders.length !== 0 ? (
        <div className="basket full-basket">
          <div className="validation">
            <button className="blue-green">Valider mon panier</button>
          </div>
          <div className="purchase">
            {orders.map((meal, index) => {
              total += meal.price * meal.quantity;
              return (
                <div className="ordered-meal" key={meal.id}>
                  <div className="quantity-and-title">
                    <div className="more-or-less">
                      <button
                        className="moreorless reverse-blue-green"
                        onClick={() => {
                          handleRemoveOrders(meal);
                        }}
                      >
                        -
                      </button>
                      <span>{meal.quantity}</span>
                      <button
                        className="moreorless reverse-blue-green"
                        onClick={() => {
                          handleAddOrders(meal);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span>{meal.title}</span>
                  </div>
                  <span>{(meal.price * meal.quantity).toFixed(2)} €</span>
                </div>
              );
            })}
          </div>
          <div className="total">
            <div className="fees">
              <div className="subtotal">
                <p>Sous-Total</p>
                <p> {total.toFixed(2)} €</p>
              </div>
              <div className="delivery-fees">
                <p>Frais de livraison</p>
                <p>2.50 €</p>
              </div>
            </div>
            <div className="actual-total">
              <p>Total :</p> <p>{(total + 2.5).toFixed(2)} €</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="basket empty-basket">
          <button>Valider mon panier</button>
          <p>Votre panier est vide</p>
        </div>
      )}
    </section>
  );
};

export default Basket;
