import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orders, setOrders] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-deliveroo--wbbmf4gr4bwy.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header data={data} />
          <main>
            <section className="left">
              {data.categories.map((category, index) => {
                if (category.meals.length !== 0) {
                  return (
                    <Category
                      category={category}
                      key={index}
                      isOrdered={isOrdered}
                      setIsOrdered={setIsOrdered}
                      orders={orders}
                      setOrders={setOrders}
                      index={index}
                      counter={counter}
                      setCounter={setCounter}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </section>
            <section className="right">
              {isOrdered ? (
                <div className="full-basket">
                  <div className="validation">
                    <button className="blue-green">Valider mon panier</button>
                  </div>
                  <div className="purchase">
                    {orders.map((order, index) => {
                      return (
                        <div className="ordered-meal">
                          {" "}
                          <button className="moreorless">-</button>
                          <p>{order.counter}</p>
                          <button className="moreorless">+</button>
                          <p>{order.title}</p>
                          <p>{order.price} €</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="empty-basket">
                  <div>
                    <button>Valider mon panier</button>
                  </div>
                  <p>Votre panier est vide</p>
                </div>
              )}
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
