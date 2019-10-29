import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const Li = styled.li`
list-style: none;
.paper {
    margin-top: 10px;
    padding: 15px;
}
.textField {
    display: block;
}
`

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
                <TextField className="textField" type="text" label="title" name="title" placeholder={this.props.title} />
                <TextField className="textField" type="text" label="desc" name="desc" placeholder={this.props.desc} />
                <Button type="submit" variant="contained">編集完了</Button>
            </form>
        } else {
            todo = 
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.desc}</p>
                <Button onClick={()=>{handleClick(id)}} variant="contained">{buttonText}</Button>
                <Button onClick={()=>{this.props.handleClickDelete(id)}} variant="contained">削除</Button>
                <Button onClick={()=>{this.props.handleEdit(id)}} variant="contained">編集</Button>
            </div>
        }
        return (
            <Li>
                <Paper className="paper">
                    {todo}
                </Paper>
            </Li>
        )
    }
}

