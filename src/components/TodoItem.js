import React, {Component} from 'react'
import ContentEditable from 'react-contenteditable'

class TodoItem extends Component{
    state={
        title:""
    }

    getStyle = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none'
        }
    }

    render(){
        const {id,title} = this.props.task; // destructuring, pulling the variables out
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleTaskComplete.bind(this, id)} checked={this.props.task.completed}/>
                <ContentEditable // To make editable text
                    html={title} // innerHTML of the editable div
                    disabled={false}       // use true to disable edition
                    onChange={this.props.changeTaskName.bind(this, id)} // handle innerHTML change
                    style={{display:"inline"}}
                />
                {/*
                {this.props.date}*/}
                <button onClick={this.props.delTask.bind(this, id)}>X</button>
            </div>
        )
    }
}

export default TodoItem