import { pizzaData } from "./App";
import { Pizza } from "./Pizza";

export function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas ?
        <>

          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <div className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
        </>
        : <p>We are still working on our menu. Please come back later.</p>}

    </main>
  );
}
