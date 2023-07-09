import { FaMap, FaCircleInfo } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

import { theme } from '@/styles';

import { NavbarContainer } from './styles';

export function Navbar() {
  return (
    <NavbarContainer>
      <img src="/favicon.png" alt="Ubiratã Logo" />

      <ul>
        <li title="Mapa">
          <NavLink to="/">
            <FaMap color={theme.colors['purple-400']} size={24} />
            Mapa
          </NavLink>
        </li>

        <li title="Sobre">
          <NavLink to="/about">
            <FaCircleInfo color={theme.colors['purple-400']} size={24} />
            Sobre
          </NavLink>
        </li>
      </ul>
    </NavbarContainer>
  );
}
