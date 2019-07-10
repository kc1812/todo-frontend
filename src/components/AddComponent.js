import React, { Component } from 'react';
class Add extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        
        const task = {
            name : event.target.name.value,
            time : event.target.datetime.value,
            priority : event.target.priority.value,
            status : "incomplete"
        }
        this.props.addTask(task);
        event.preventDefault();
        event.target.reset();
    }
    render() {
        return (

            <div className="container">
                <div className="row row-content">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name"
                            id="name" placeholder="Name" required/>
                        <input type="datetime-local" name="datetime"
                            id="datetime" min={new Date()} required/>
                        <select name="priority" id="priority" required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    };

}

export default Add;