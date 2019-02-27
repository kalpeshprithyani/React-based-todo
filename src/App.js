import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Todos from './components/Todos'
import './App.css'
import Header from './components/Layout/Header'
import AddNewTodo from './components/AddNewTodo'
import uuid from 'uuid'

import About from './components/pages/About'

class App extends Component{
    state={
            task: []
    }

    // GET DATA FROM BROWSER
    componentDidMount() {
        const cachedList = localStorage.getItem("list")
        console.log(this.state.task)
        if(cachedList){
            this.setState({
                task: JSON.parse(localStorage.getItem("list"))
            })
        }
    }

    // TOGGLE TASK COMPLETE
    toggleComplete = (id) =>{
        this.setState({
            task: this.state.task.map(task => {
                if(task.id === id){
                    task.completed = !task.completed
                }
                return task
            })
        },()=>{
            localStorage.setItem("list", JSON.stringify(this.state.task)) // because local storage can only store strings
        })
    }

    // DELETE TASK
    delTask = (id) =>{
        this.setState({
            task:[...this.state.task.filter(todo => todo.id !== id)]
        },()=>{
            localStorage.setItem("list", JSON.stringify(this.state.task)) // because local storage can only store strings
        })
    }

    // ADD TASK
    addTask = (title) =>{
        const newTask = {
            id: uuid.v4(),
            title, // this is equal to title: title
            completed: false
        }
        this.setState({
            task: [...this.state.task, newTask]
        }, () => {
            localStorage.setItem("list", JSON.stringify(this.state.task)) // because local storage can only store strings
        })
    }

    render() {
        return(
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" render={ props => ( // single route will load both of these components
                        <React.Fragment>
                            <AddNewTodo addTask={this.addTask}/>
                            { Object.keys(this.state.task).length === 0 ? <div>Enter new Task</div> :
                                <Todos
                                    task={this.state.task}
                                    toggleComplete={this.toggleComplete}
                                    delTask={this.delTask}
                                />
                            }
                        </React.Fragment>
                    )}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

export default App