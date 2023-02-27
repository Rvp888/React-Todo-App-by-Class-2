import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='mainPage'>
        {
          this.props.todos.map((todo, index) => {
            return (
              <div className='ticket' key={todo.id}>
                <h2 className='ticket-heading'>{todo.name}</h2>
                <p className='ticket-description'>{todo.description}</p>
                <h3 className='ticket-status' id={todo.status} title="Status">{todo.status}</h3>
                <EditIcon className='edit-icon' onClick={() => this.props.changeStatus(true, todo.id)} title="Edit"/>
                <DeleteIcon className='delete-icon' onClick={() => this.props.deleteTodo(todo.id)} title="Delete"/>
              </div>
            );
          })
        }

      </div>
    )
  }
}
