import React from "react"

export default class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <p>タイトル : React</p>
                <p>詳細 : コンポーネントを作る</p>
            </li>
            <li>
                <p>タイトル : LP作成</p>
                <p>詳細 : レスポンシブ対応でLP作成</p>
            </li>
        )
    }
}

