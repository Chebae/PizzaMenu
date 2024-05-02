import focaccia from "./pizzas/focaccia.jpg";
import Margherita from "./pizzas/margherita.jpg";
import Spinaci from "./pizzas/spinaci.jpg";
import Funghi from "./pizzas/funghi.jpg";
import Salamino from "./pizzas/salamino.jpg";
import Prosciutto from "./pizzas/prosciutto.jpg";
import "./App.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with a touch of italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomato and a little mozarella",
    price: 10,
    photoName: Margherita,
    soldOut: false,
  },
  {
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and a pint of ricotta cheese",
    price: 12,
    photoName: Spinaci,
    soldOut: true,
  },
  {
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and a bunch of onions",
    price: 12,
    photoName: Funghi,
    soldOut: false,
  },
  {
    name: "Salamino",
    ingredients: "Tomato, mozarella, and a few grains of pepperoni",
    price: 15,
    photoName: Salamino,
    soldOut: false,
  },
  {
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and some burrata cheese",
    price: 18,
    photoName: Prosciutto,
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

