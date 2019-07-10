import React,{Component} from 'react';

class Display extends Component{
    
    render(){
        const tasks = this.props.tasks.map((task,i) => {
            return(
                <tr key={i}>
                    <td>{task.name}</td>
                    <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour:'2-digit', minute:"2-digit" }).format(new Date(Date.parse(task.time)))}</td>
                    <td>{task.priority}</td>
                    <td>{task.status}</td>
                    <td><button onClick={() => this.props.updateTask(i)}>Complete</button></td>
                    <td><button onClick={() => this.props.deleteTask(i)}>Delete</button></td>
                </tr>
            );
        });
        if(this.props.tasks.length>0){
            return(
                <div>
                    <table>
                        <thead>
                            <tr key={"heading"}>
                                <th>Task</th>
                                <th>DateTime</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks}
                        </tbody>
                        
                    </table>
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }
        
    }
}

export default Display;