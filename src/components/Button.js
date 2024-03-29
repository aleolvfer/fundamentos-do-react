import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

export default function Button(props) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <>
      <button
        onClick={props.onClick}
        style={{
          color: theme === 'dark' ? '#000' : '#fff',
          background: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        {props.children}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
