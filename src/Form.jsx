import React from "react"

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="title" />
                <input type="text" name="desc" />
                <button type="submit">追加</button>
            </form>
        )
    }
}




