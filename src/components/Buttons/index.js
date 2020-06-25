import React from 'react';
import { List } from './styles'

const Button = ({ children }) => {
  return (
    <List>
      { children }
    </List>
  )
}

export default Button;