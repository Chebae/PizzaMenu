export function Pizza({ pizzaObj }) {
  return (
    <h4 className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    </h4>
  );
}
