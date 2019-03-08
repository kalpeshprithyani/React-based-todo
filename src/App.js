import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './style/App.scss'

import Header from './components/Layout/Header'
import AddNewTodo from './components/AddNewTodo'
import UserDetails from './components/UserDetails'
import MyDay from './components/MyDay.js'
import DisplayList from "./components/DisplayList";

class App extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <AddNewTodo/>
                    <UserDetails/>
                    <DisplayList/>
                </div>
            </Router>
        )
    }
}

export default App