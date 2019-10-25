import React from "react"

export default class TodoItem extends React.Component {
    render() {
        const buttonText = this.props.isDone ? "戻す" : "完了" 
        const id = this.props.id
        const handleClick = this.props.handleClick
        return (
            <li>
                <p>{this.props.title}</p>
                <p>{this.props.desc}</p>
                <button onClick={()=>{handleClick(id)}}>{buttonText}</button>
                <button onClick={()=>{this.props.handleClickDelete(id)}}>削除</button>
            </li>
        )
    }
}

