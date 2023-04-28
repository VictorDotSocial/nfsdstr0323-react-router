import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* Forma básica de añadir los elementos al menú */}
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => 'active-route'}
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          {/* Forma más eficiente de añadir los elementos al menú  */}
          {routes.map((route) => (
            <li>
              <NavLink
                className={({ isActive }) => 'active-route'}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const routes = [
  {
    to: '/',
    text: 'Home Page',
  },
  {
    to: '/blog',
    text: 'Blog',
  },
  {
    to: '/contacto',
    text: 'Contacto',
  },
];

export default Menu;
