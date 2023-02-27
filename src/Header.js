import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <h1 className='header-title'>Todo App</h1>
                <input type="search" placeholder='Search' className='todo-search' onChange={(e) => this.props.changeSearchValue(e.target.value)}/>
                <button className='addButton' onClick={() => this.props.changeStatus(true)} title="Add a Todo" >+</button>
            </div>
        )
    }
}
