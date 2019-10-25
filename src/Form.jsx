import React from "react"

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="title" placeholder="タイトル" />
                <input type="text" name="desc" placeholder="詳細" />
                <button type="submit">追加</button>
            </form>
        )
    }
}




