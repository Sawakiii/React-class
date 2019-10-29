import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

const Container = styled.form`
padding: 15px;
.textField {
    display: block;
}
`

export default class Form extends React.Component {
    render() {
        return (
            <Paper>
                <Container onSubmit={this.props.handleSubmit}>
                    <TextField className="textField" type="text" label="title" name="title" placeholder="タイトル" margin="normal" />
                    <TextField className="textField" type="text" label="desc" name="desc" placeholder="詳細" margin="normal" />
                    <Button type="submit" variant="contained">追加</Button>
                </Container>
            </Paper>
        )
    }
}




