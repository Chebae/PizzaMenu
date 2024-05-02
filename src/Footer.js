import { Order } from "./Order";

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ?
        <Order openHour={openHour} closeHour={closeHour} />
        : <p>We are happy to help you between {openHour}:00 and {closeHour}:00.</p>}

    </footer>
  );
}
