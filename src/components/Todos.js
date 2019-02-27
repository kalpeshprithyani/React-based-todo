import React, {Component} from 'react'
import TodoItem from './TodoItem'

class Todos extends Component{
    render(){
        return this.props.task.map((task) => (
            <TodoItem
                key={task.id}
                task={task}
                toggleComplete={this.props.toggleComplete}
                delTask={this.props.delTask}
            />
        ));
    }
}

export default Todos