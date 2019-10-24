import React from "react"
import Form from "./Form"
import TodoList from "./TodoList"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : [
				{
					id : 0,
					title : "React",
					desc : "コンポーネントを作る",
					isDone: false
				},
				{
					id : 1,
					title : "LP作成",
					desc : "レスポンシブ対応でLP作成",
					isDone : false
				}
			]
		}
	}
	handleSubmit(e) {
		e.preventDefault()
		const title = e.target.title.value
		const desc = e.target.desc.value
		const newTodos = this.state.todos.slice()
		newTodos.push({
			id : this.state.todos.length,
			title : title,
			desc : desc,
			isDone : false
		})
		this.setState({
			todos : newTodos
		})
	}
	handleClick(id) {
		const newTodos = this.state.todos.slice()
		newTodos[id].isDone =! newTodos[id].isDone
		this.setState({
			todos : newTodos
		})
	}
	render() {
		return (
	  		<div>
				<Form handleSubmit={this.handleSubmit.bind(this)}></Form>
				<TodoList todos={this.state.todos} handleClick={this.handleClick.bind(this)}></TodoList>
	  		</div>
		)
  	}
}

export default App


