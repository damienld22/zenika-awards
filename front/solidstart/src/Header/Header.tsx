import { A } from '@solidjs/router';
import './Header.css';

export default function Header() {
  return (
    <header class="header">
      <nav class="header__nav">
        <h1>🏆 Zenika Awards</h1>
        <ul class="header__nav__navbar">
          <li class="header__nav__item"><A href="/">Accueil</A></li>
          <li class="header__nav__item"><A href="/add">Ajoutez une citation</A></li>
        </ul>
      </nav>
      <div class="header__title">
        <h1>Classement des meilleures citations entendues chez Zenika</h1>
      </div>
    </header>
  )
}