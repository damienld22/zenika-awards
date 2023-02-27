import { Component } from "solid-js";
import "./Header.css";

const Header: Component = () => {
  return (
    <header class="header">
      <nav class="header__nav">
        <h1>🏆 Zenika Awards</h1>
        <ul class="header__nav__navbar">
          <li class="header__nav__item">
            <a href="/">Accueil</a>
          </li>
          <li class="header__nav__item">
            <a href="/add">Ajoutez une citation</a>
          </li>
        </ul>
      </nav>
      <div class="header__title">
        <h1>Classement des meilleures citations entendues chez Zenika</h1>
      </div>
    </header>
  );
};

export default Header;
