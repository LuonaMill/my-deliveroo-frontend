import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [price, setPrice] = useState([0]);

  //! J'upload ma data depuis mon back - hébergé sur Northflank - au chargement de ma page
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

  //! Je vérifie si le plat que j'ajoute est déjà dans mon panier et :
  //si oui : j'incrémente le nombre de ce plat
  // sinon : je crée une ligne de commande pour ce commande
  const handleAddOrders = (meal) => {
    const copyOrders = [...orders];

    //*Méthode longue :
    // let isPresent = false;
    // for (let i = 0; i < copyOrders.length; i++) {
    //   if (copyOrders[i].id === meal.id) {
    //     copyOrders[i].quantity++;
    //     isPresent = true;
    //      break;
    //   }
    // }
    // if (isPresent === false) {
    //   const mealCopy = { ...meal, quantity: 1 };
    //   on copie l'objet meal qui représente chaque élément du tableau orders, et on ajoute la clé quantity qui est par défaut à 1)
    //   copyOrders.push(mealCopy);
    // }

    //*Méthode courte
    //On crée une variable qui stocke le 1er élément de copyOrders qui renvoie true à l'exécution de find.
    //Rappel : find(() =>{}) cherche un élément dans le tableau dont l'id est identique à l'id du meal sur lequel on a cliqué.
    // => mealIsPresent renverra soit undefined (donc false) soit le premier élément qui matche en termes d'id
    const mealIsPresent = copyOrders.find((elem) => elem.id === meal.id);
    if (mealIsPresent) {
      mealIsPresent.quantity++;
    } else {
      const mealCopy = { ...meal, quantity: 1 };
      copyOrders.push(mealCopy);
    }

    setOrders(copyOrders);
  };

  // On crée handleRemoveOrders pour les clics sur le bouton moins
  //On va chercher le meal du panier auquel est associé le bouton - concerné, puis on lui enlèvera la quantité 1
  const handleRemoveOrders = (meal) => {
    const copyOrders = [...orders];
    const mealToRemove = copyOrders.find((elem) => elem.id === meal.id);
    if (mealToRemove.quantity === 1) {
      const indexToRemove = copyOrders.indexOf(mealToRemove);
      copyOrders.splice(indexToRemove, 1);
    } else {
      mealToRemove.quantity--;
    }
    setOrders(copyOrders);
  };

  //Il existe une autre possibilité dans la boucle de mon panier
  // for (let i = 0; i < orders.length; i++) {
  //   total += orders[i].price * orders[i].quantity;
  // }

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
                      handleAddOrders={handleAddOrders}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </section>
            <Basket
              orders={orders}
              handleAddOrders={handleAddOrders}
              handleRemoveOrders={handleRemoveOrders}
            />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
