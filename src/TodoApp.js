import React, { Component } from 'react';
import "./TodoApp.css";
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';
import AddTodo from './AddTodo';

export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            modalStatus: false,
            todos: [],
            currentEditTodo: {},
            searchValue: "",
            SearchedTodos: []
        }
    }

    componentDidMount() {
        const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
        this.setState({ todos: localTodos });
    }

    componentDidUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    changeSearchValue = (text) => {
        this.setState({ searchValue: text });
        const searchFiltered = this.state.todos.filter((ele) => ele.name.toLowerCase().includes(text.toLowerCase()) || ele.status.toLowerCase().includes(text.toLowerCase()));
        this.setState({ SearchedTodos: searchFiltered });
    }

    changeModalStatus = (status, id) => {
        this.setState({
            modalStatus: status,
            currentEditTodo: this.state.todos.filter((ele) => ele.id === id)[0]
        })
    }

    createTodo = (name, description, status) => {
        if (name, status) {
            const temp = [...this.state.todos, {
                id: Date.now(),
                name: name,
                description: description,
                status: status
            }];
            this.setState({
                todos: temp
            })
        }
    }

    deleteTodo = (id) => {
        this.setState({ todos: this.state.todos.filter((ele) => ele.id !== id) })
    }

    updateTodo = (id, name, description, status) => {
        const temp = this.state.todos.map((ele) => {
            if (ele.id === id) {
                return {
                    id,
                    name,
                    description,
                    status
                }
            }
            return ele;
        });
        this.setState({
            todos: temp
        })
    }

    render() {
        return (
            <div>
                <Header changeStatus={this.changeModalStatus} changeSearchValue={this.changeSearchValue} />
                <MainPage todos={this.state.searchValue ? this.state.SearchedTodos : this.state.todos} deleteTodo={this.deleteTodo} changeStatus={this.changeModalStatus} />
                {
                    this.state.modalStatus && <div className='modal'>
                        <AddTodo changeStatus={this.changeModalStatus} createTodo={this.createTodo} currentEditTodo={this.state.currentEditTodo} updateTodo={this.updateTodo} />
                    </div>
                }
                <Footer />
            </div>
        )
    }
}
