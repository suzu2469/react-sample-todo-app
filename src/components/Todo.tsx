import * as React from 'react'
import styled from 'styled-components'

import Button from './Button'

type Props = {
  completed?: boolean
  onClickOperation: () => void
}

const Todo: React.SFC<Props> = ({ completed, children, onClickOperation,  ...props }) => (
  <Wrap {...props}>
    <TodoText className={completed ? 'strike' : null}>{children}</TodoText>
    <Button onClick={e => onClickOperation()}>{completed ? '削除' : '完了'}</Button>
  </Wrap>
)

const Wrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
  margin: 0;
`

const TodoText = styled.div`
  &.strike {
    text-decoration: line-through;
  }
`

export default Todo