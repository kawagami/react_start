import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = (params) => {
        // 獲取用戶的輸入，連續解構賦值+重命名
        const { keyWordElement: { value: keyWord } } = this
        this.props.updateAppState({ isFirst: false, isLoading: true })
        // 發送request
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                console.log(error.message);
                this.props.updateAppState({ isLoading: false, err: error.message })
            }
        )
    }

    render() {
        const { isLoading } = this.props
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用戶</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="輸入關鍵詞點擊搜索" />&nbsp;
                    {isLoading ? <button>搜索</button> : <button onClick={this.search}>搜索</button>}
                </div>
            </section>
        )
    }
}
