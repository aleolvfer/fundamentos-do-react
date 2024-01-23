import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';
import Titleeee from '../Title';
export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        borderBottom: '1px solid',
      }}
    >
      <Button onClick={onToggleTheme} >
          Mudar tema
      </Button>
      <Titleeee>{title}</Titleeee>
      {children}
      <hr/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

Header.defaultProps = {
  title: 'Titulo padrão',
  children: <h2>Segundo titulo padrão - <i>defaultProps / prop children</i></h2>
}
