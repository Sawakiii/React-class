import React from "react"

export default class TodoItem extends React.Component {
    render() {
        const buttonText = this.props.isDone ? "戻す" : "完了" 
        return (
            <li>
                <p>{this.props.title}</p>
                <p>{this.props.desc}</p>
                <button>{buttonText}</button>
            </li>
        )
    }
}

