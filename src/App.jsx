import React from "react"
import Form from "./Form"
import TodoList from "./TodoList"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : [
				{
					title : "React",
					desc : "コンポーネントを作る",
					isDone: false
				},
				{
					title : "LP作成",
					desc : "レスポンシブ対応でLP作成",
					isDone : false
				}
			]
		}
	}
	render() {
		return (
	  		<div>
				<Form></Form>
				<TodoList todos={this.state.todos}></TodoList>
	  		</div>
		)
  	}
}

export default App


