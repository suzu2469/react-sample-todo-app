import * as React from 'react'
import styled from 'styled-components'

const Component: React.SFC = () => (
  <RedText>
    <p>Plain Text</p>
    <a href="">Hello my first app!!</a>
  </RedText>
)

const RedText = styled.div`
  color: red;
  font-size: 24px;

  & > a {
    color: inherit;
    text-decoration: none;
    transition: 0.15s;

    &:hover {
      color: blue;
    }
  }
`

export default Component