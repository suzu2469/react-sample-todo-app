import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const TodoList: React.SFC = ({ children, ...props }) => (
  <List {...props}>
    {children}
  </List>
)

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: solid 1px ${colors.primary};

  & > li {
    border-top: solid 1px ${colors.primary};
  }
`

export default TodoList