import React, { Component } from 'react';
import Add from './AddComponent';
import Display from './DisplayComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addTask(task) {
        const newTask = { ...task };
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });

    }
    updateTask(index) {
        const tasks = this.state.tasks;
        tasks[index].status = "complete";
        this.setState({
            tasks: tasks
        });

    }
    deleteTask(index) {
        const tasks = this.state.tasks.filter((task, idx) => idx !== index);
        this.setState({
            tasks: tasks
        });

    }
    render() {
        return (
            <div>
                <Add addTask={this.addTask} />
                <Display tasks={this.state.tasks} 
                updateTask={this.updateTask}
                deleteTask={this.deleteTask} />
            </div>
        );
    };
}

export default Main;