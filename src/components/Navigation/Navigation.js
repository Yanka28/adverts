import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <div>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/catalog" className={css.link}>
          Caralog
        </NavLink>
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};
