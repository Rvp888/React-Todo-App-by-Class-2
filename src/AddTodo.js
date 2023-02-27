import React, { Component } from 'react';

import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.currentEditTodo ? this.props.currentEditTodo.name : "",
            description: this.props.currentEditTodo ? this.props.currentEditTodo.description : "",
            status: this.props.currentEditTodo ? this.props.currentEditTodo.status : ""
        }
    }

    addTodo = () => {
        if(this.props.currentEditTodo){
            this.props.updateTodo(this.props.currentEditTodo.id, this.state.title, this.state.description, this.state.status)
        } else {
            this.props.createTodo(this.state.title, this.state.description, this.state.status);
        }
        this.props.changeStatus(false);
    }

    render() {
        return (
            <div className='create-todo'>
                {
                    <h2>{this.props.currentEditTodo ? 'Update Todo' : 'Create a Todo'}</h2>
                }
                <TextField id="outlined-basic" label="Todo Title" variant="outlined" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                <TextField
                    id="outlined-multiline-static"
                    className='description-field'
                    label="Todo Description"
                    multiline
                    rows={4}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    value={this.state.description}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={(e) => this.setState({ status: e.target.value })}
                        value={this.state.status}
                    >
                        <MenuItem value={"Todo"}>Todo</MenuItem>
                        <MenuItem value={"In Progress"}>In Progress</MenuItem>
                        <MenuItem value={"Done"}>Done</MenuItem>
                    </Select>
                </FormControl>
                <div className='action-wrapper'>
                    <Button variant="contained" color='success' onClick={this.addTodo}>
                        {
                            this.props.currentEditTodo ? 'Update' : 'Add'
                        }
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => this.props.changeStatus(false)}>Close</Button>
                </div>
            </div>
        )
    }
}
