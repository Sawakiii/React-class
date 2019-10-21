import React from "react"

export default class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" name="title" />
                <input type="text" name="desc" />
                <button type="submit">追加</button>
            </form>
        )
    }
}




