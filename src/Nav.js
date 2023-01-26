import React from "react";

function Directions() {
  return (
    <ul>
      <li>
        <a href="https://www.littlelemon.com"></a>Home
      </li>
      <li>
        <a href="https://www.littlelemon.com/about"></a>About
      </li>
      <li>
        <a href="https://www.littlelemon.com/menu"></a>Menu
      </li>
      <li>
        <a href="https://www.littlelemon.com/reservations"></a>Reservations
      </li>
      <li>
        <a href="https://www.littlelemon.com/order_online"></a>Order Online
      </li>
      <li>
        <a href="https://www.littlelemon.com/login"></a>Login
      </li>
    </ul>
  );
}

export default function Nav() {
  return <Directions />;
}
