
import './Menu.scss';

export default function Menu() {
  return (
		<nav className="menu">
			<ul className="menu__list">
				<li className="menu__item menu__item--current">
          <a className="menu__link">Accueil</a></li>
				<li className="menu__item">
          <a className="menu__link">Le calulateur</a></li>
				<li className="menu__item">
          <a className="menu__link">La formule</a></li>
				<li className="menu__item">
          <a className="menu__link">Les donnée</a></li>
				<li className="menu__item">
          <a className="menu__link">Contact</a></li>
			</ul>
		</nav>
  );
}
