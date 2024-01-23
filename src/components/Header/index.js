import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: #637bf3;
`;

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
      <Title>{title}</Title>
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
