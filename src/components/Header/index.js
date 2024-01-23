import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './Header.scss';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        borderBottom: '1px solid',
      }}
      className={styles.title}
    >
      <Button
        onClick={onToggleTheme}
        >
          Mudar tema
      </Button>
        <h1>{title}</h1>
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
