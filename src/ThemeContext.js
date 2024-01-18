import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  function handleToggleTheme() {
    setTheme(precState => (
      precState === 'dark'
      ? 'light'
      : 'dark'
    ));
  }

  return (
    <ThemeContext.Provider
      value={{ 
      theme,
      onToggleTheme: handleToggleTheme
    }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
