import React from "react"
import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
    render() {
        
        // 繰り返ししてliが入ったリストつくる。
        let list = this.props.todos.map((todo, i)=>{
            return (
                <TodoItem 
                title={todo.title}
                desc={todo.desc}
                isDone={todo.isDone}
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


