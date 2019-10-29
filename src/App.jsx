import React from "react"
import Form from "./Form"
import TodoList from "./TodoList"
import styled from "styled-components"

const Container = styled.div`
background-color: #F5F5F5;
`

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : [
				{
					id : 0,
					title : "React",
					desc : "コンポーネントを作る",
					isDone: false,
					isEdit: false
				},
				{
					id : 1,
					title : "LP作成",
					desc : "レスポンシブ対応でLP作成",
					isDone : false,
					isEdit: false
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
			isDone : false,
			isEdit : false
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
	handleClickDelete(id) {
		const DeletedTodos = this.state.todos.slice()
		DeletedTodos.splice(id, 1)
		DeletedTodos.map((todo, i)=>{
			return (
				todo.id = i,
				todo.title = todo.title,
				todo.desc = todo.desc,
				todo.isDone = todo.isDone,
				todo.isEdit = todo.isEdit
			)
		})
		let deleteConfirm = window.confirm("「" + this.state.todos[id].title + "」" + "を削除しますか?")
		if (deleteConfirm) {
			this.setState({
				todos: DeletedTodos
			})
		}
	}
	handleEdit(id) {
		const editTodos = this.state.todos.slice()
		editTodos[id].isEdit = true
		this.setState({
			todos : editTodos
		})
	}
	handleEditSubmit(e, id) {
		const editedTodos = this.state.todos.slice()
		const title = e.target.title.value
		const desc = e.target.desc.value
		editedTodos[id].title = title
		editedTodos[id].desc = desc
		editedTodos[id].isEdit = false
		this.setState({
			todos : editedTodos
		})
	}
	render() {
		return (
	  		<Container>
				<Form handleSubmit={this.handleSubmit.bind(this)}></Form>
				<TodoList todos={this.state.todos} 
				handleClick={this.handleClick.bind(this)}
				handleClickDelete={this.handleClickDelete.bind(this)}
				handleEdit={this.handleEdit.bind(this)}
				handleEditSubmit={this.handleEditSubmit.bind(this)}
				></TodoList>
	  		</Container>
		)
  	}
}

export default App


