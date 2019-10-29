import React from "react"
import styled from "styled-components"

const Container = styled.form`
input {
    display: block;
}
`

export default class Form extends React.Component {
    render() {
        return (
            <Container onSubmit={this.props.handleSubmit}>
                <input type="text" name="title" placeholder="タイトル" />
                <input type="text" name="desc" placeholder="詳細" />
                <button type="submit">追加</button>
            </Container>
        )
    }
}




