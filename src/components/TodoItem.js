import React, {Component} from 'react'

class TodoItem extends Component{
    getStyle = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none'
        }
    }

    render(){
        const {id,title} = this.props.task; // destructuring, pulling the variables out
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} checked={this.props.task.completed}/>
                {title}
                <button onClick={this.props.delTask.bind(this, id)}>X</button>
            </div>
        )
    }
}

export default TodoItem