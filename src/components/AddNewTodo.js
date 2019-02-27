import React, {Component} from 'react'

class AddNewTodo extends Component{
    state={
        title:""
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({
            title:""
        })
    }

    handleChange = (event) =>{
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add a Todo ..."
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    name="submit"
                />
            </form>
        )
    }
}

export default AddNewTodo