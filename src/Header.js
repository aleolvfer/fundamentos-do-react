import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
      <hr/>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

Header.defaultProps = {
  title: 'Titulo padrão',
  children: 'Taca um h2 aee'
}
