import React from "react";

function FooterLogo() {
  return <img src="" alt="" />;
}

function DoormatNavigation() {
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

function Contact() {
  return (
    <address>
      1111 Purified Ln
      <br />
      Los Angeles,CA
      <br />
      USA
      <br />
      <a href="tel:+19064441282">Phone Number</a>
      <br />
      <a href="mailto:cservice@littlelemon.com">Email</a>
    </address>
  );
}

function SocialMedia() {
  return (
    <ul>
      <li>
        <a href="#" className="Facebook">
          Facebook
        </a>
      </li>
      <li>
        <a href="#" className="Twitter">
          Twitter
        </a>
      </li>
      <li>
        <a href="#" className="Instagram">
          Instagram
        </a>
      </li>
    </ul>
  );
}

export default function Footer() {
  return (
    <>
      <section>
        <h3>Doormat Navigation</h3>
        <DoormatNavigation />
      </section>
      <section>
        <h3>Contact</h3>
        <Contact />
      </section>
      <section>
        <h3>Social Media Links</h3>
        <SocialMedia />
      </section>
    </>
  );
}
