import _ from 'lodash';
import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import todoStatuses from './todoStatuses';

class TodoDashboard extends Component {
    renderContent() {
        return _.map(todoStatuses, status => {
            return (
                <div className="dashboard__column" key={status.id}>
                    <p className="dashboard__column-title">{status.label}</p>
                    <TodoForm status={status.id} form={status.id} />
                    <TodoList filterByStatus={status.id} />
                </div>
            );
        });
    }

    render() {
        return <div className="dashboard">{this.renderContent()}</div>;
    }
}

export default TodoDashboard;
