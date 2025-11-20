import { Footer, Header, Guitar } from './components';
import { useState } from 'react';
import { db } from './data/db';

export const App = () => {
  const [guitars, setGuitar] = useState(db);
  const [cart, setCart] = useState([]);

  const addToCart = (guitar) => {
    if (cart.some((item) => item.id === guitar.id)) {
      setCart(
        cart.map((g) => {
          if (g.id !== guitar.id) {
            return g;
          }
          return { ...g, quantity: g.quantity + 1 };
        })
      );
    } else {
      setCart([...cart, { ...guitar, quantity: 1 }]);
    }
  };

  const emptyCart = () => {
    //terminar codigo
    setCart([]);
  };

  return (
    <>
      <Header cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map((g) => (
            <Guitar key={g.id} guitar={g} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
