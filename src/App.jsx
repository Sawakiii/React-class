import React from "react"
import Form from "./Form"
import TodoList from "./TodoList"

class App extends React.Component {
  render() {
    return (
      <div>
        <Form></Form>
        <TodoList></TodoList>
      </div>
    )
  }
}

export default App


