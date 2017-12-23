import _ from 'lodash';
import React, { Component } from 'react';

import TodoList from './TodoList';

import todoStatuses from './todoStatuses';

class TodoDashboard extends Component {
    renderContent() {
        return _.map(todoStatuses, status => {
            return (
                <div key={status.id}>
                    <p>{status.label}</p>
                    <TodoList filterByStatus={status.id} />
                </div>
            );
        });
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

export default TodoDashboard;
