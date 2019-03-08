import React, {Component} from 'react'

class AddNewTodo extends Component{
    render(){
        return (
            <div className="AddNewTodo-index">
                <form className="AddNewTodo-index-form">
                    <input type="text" placeholder="Add New Task"/>
                    <select name="category">
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Others">Others</option>
                    </select>
                    <input type="date"/>
                </form>
            </div>
        )
    }
}

export default AddNewTodo