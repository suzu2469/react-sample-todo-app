import * as React from 'react'
import styled from 'styled-components'
import colors from './constants/colors'

import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Title from './components/Title'
import AddTodoForm from './components/AddTodoForm'

type State = {
  todos: TodoType[]
  newTodoName: string
}

type TodoType = {
  name: string
  completed: boolean
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    const todos = this.loadTodosFromLocalStrage()
    this.state = { newTodoName: '', todos }
  }

  get doingTodos() {
    return this.state.todos.filter(t => !t.completed)
  }

  get completedTodos() {
    return this.state.todos.filter(t => t.completed)
  }

  loadTodosFromLocalStrage(): TodoType[] {
    const todosString = window.localStorage.getItem('todos') || '[]'
    return JSON.parse(todosString)
  }

  saveTodosToLocalStrage(todos: TodoType[]) {
    const todosString = JSON.stringify(todos)
    window.localStorage.setItem('todos', todosString)
  }

  addTodo() {
    if (this.state.newTodoName === '') return
    const changedTodos = [ ...this.state.todos, { name: this.state.newTodoName, completed: false }]
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos, newTodoName: '' })
  }

  completeTodo(index: number) {
    const changedTodos = this.state.todos.map((t, i) => {
      if (index !== i) return t
      return { ...t, completed: true }
    })
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos })
  }

  removeTodo(index: number) {
    const changedTodos = this.state.todos.filter((_, i) => i !== index)
    this.saveTodosToLocalStrage(changedTodos)
    this.setState({ ...this.state, todos: changedTodos })
  }

  render() {
    return (
      <Wrapper>
        <TodosWrap>
          <Title>TODOS</Title>
          <AddTodoForm
            value={this.state.newTodoName}
            onChangeValue={value => this.setState({ ...this.state, newTodoName: value })}
            onClickAddTodo={() => this.addTodo()}
          />
          <SpacedTodoList>
            {this.doingTodos.map((t, i) => (
              <Todo onClickOperation={() => this.completeTodo(i)}>{t.name}</Todo>
            ))}
          </SpacedTodoList>
        </TodosWrap>
        <CompletedTodosWrap>
          <Title>COMPLETED</Title>
          <TodoList>
            {this.completedTodos.map((t, i) => (
              <Todo onClickOperation={() => this.removeTodo(i)} completed>{t.name}</Todo>
            ))}
          </TodoList>
        </CompletedTodosWrap>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  width: 375px;
  margin: 0 auto;
  padding: 0 8px;
  color: ${colors.primary};
`

const TodosWrap = styled.div``

const SpacedTodoList = styled(TodoList)`
  margin-top: 32px;
`

const CompletedTodosWrap = styled.div`
  margin-top: 70px;
`

export default App