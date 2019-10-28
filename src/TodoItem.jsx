import React from "react"

export default class TodoItem extends React.Component {
    render() {
        const buttonText = this.props.isDone ? "戻す" : "完了" 
        const id = this.props.id
        const handleClick = this.props.handleClick
        let todo
        if (this.props.isEdit === true) {
            todo = 
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.props.handleEditSubmit(e, id)}}>
                <input type="text" name="title" placeholder={this.props.title} />
                <input type="text" name="desc" placeholder={this.props.desc} />
                <button type="submit">編集完了</button>
            </form>
        } else {
            todo = 
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.desc}</p>
                <button onClick={()=>{handleClick(id)}}>{buttonText}</button>
                <button onClick={()=>{this.props.handleClickDelete(id)}}>削除</button>
                <button onClick={()=>{this.props.handleEdit(id)}}>編集</button>
            </div>
        }
        return (
            <li>
                {todo}
            </li>
        )
    }
}

