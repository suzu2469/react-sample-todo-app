import * as React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

import Button from './Button'

type Props = {
  value: string
  onChangeValue: (value: string) => void
  onClickAddTodo: () => void
}

const AddTodoForm: React.SFC<Props> = ({ value, onChangeValue, onClickAddTodo, ...props }) => (
  <Outer {...props}>
    <Input type="text" value={value} onChange={e => onChangeValue(e.target.value)} />
    <AddButton onClick={e => onClickAddTodo()}>追加</AddButton>
  </Outer>
)

const Outer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: solid 1px ${colors.primary};
`

const Input = styled.input`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 16px;
  flex-grow: 1;
  height: 100%;
  border-style: none;
  color: ${colors.primary};

  &:focus {
    outline: 0;
  }
`

const AddButton = styled(Button)`
  height: 100%;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 0px;
  background-color: ${colors.primary};
  color: white;
`

export default AddTodoForm