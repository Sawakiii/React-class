import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
    render() {
        
        // 繰り返ししてliが入ったリストつくる。
        let list = this.props.todos.map((todo, i)=>{
            return (
                <TodoItem 
                id={todo.id}
                title={todo.title}
                desc={todo.desc}
                isDone={todo.isDone}
                handleClick={this.props.handleClick}
                handleClickDelete={this.props.handleClickDelete}
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


