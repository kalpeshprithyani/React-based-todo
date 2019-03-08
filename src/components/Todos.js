import React, {Component} from 'react'
import TodoItem from './TodoItem'
import ContentEditable from 'react-contenteditable'

class Todos extends Component{
    render(){
        return <div>

            {console.log(this.props.location.state.task)}

        </div>
    }
}

export default Todos