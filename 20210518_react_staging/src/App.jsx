import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    }

    updateAppState = (obj) => {
        this.setState(obj)
    }

    render() {
        const { isLoading } = this.state
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} isLoading={isLoading} />
                <List {...this.state} />
            </div>
        )
    }
}
