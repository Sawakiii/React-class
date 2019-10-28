import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
    render() {
        let list = this.props.todos.map((todo, i)=>{
            return (
                <TodoItem 
                id={todo.id}
                title={todo.title}
                desc={todo.desc}
                isDone={todo.isDone}
                isEdit={todo.isEdit}
                handleClick={this.props.handleClick}
                handleClickDelete={this.props.handleClickDelete}
                handleEdit={this.props.handleEdit}
                handleEditSubmit={this.props.handleEditSubmit}
                ></TodoItem>
            )
        })
        return (
            <ul>
                {list}
            </ul>
        )
    }
}


