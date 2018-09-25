import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

type Props = {
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.SFC<Props> = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
)

const Wrap = styled.button`
  border-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colors.primary};
  font-size: 16px;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
  color: ${colors.primary};

  transition: 0.08s;
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`

export default Button