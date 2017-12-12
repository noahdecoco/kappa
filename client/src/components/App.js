import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import * as actions from '../actions';

import Login from './Login';
import Header from './Header';
import TodoForm from './todos/TodoForm';
import TodoList from './todos/TodoList';

class App extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    renderContent() {
        if (!this.props.auth) return;

        if (!this.props.auth._id) {
            return <Route path="/" component={Login} />;
        }

        return (
            <div>
                <Header />
                <TodoForm />
                <p>Incomplete tasks</p>
                <TodoList showCompleted={false} />
                <p>Complete tasks</p>
                <TodoList showCompleted={true} />
            </div>
        );
    }

    render() {
        return <BrowserRouter>{this.renderContent()}</BrowserRouter>;
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps, actions)(App);
