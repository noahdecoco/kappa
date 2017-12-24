import _ from 'lodash';
import React, { Component } from 'react';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import taskTypes from './taskTypes';

class TasksDashboard extends Component {
    renderContent() {
        return _.map(taskTypes, type => {
            return (
                <div className="dashboard__column" key={type.id}>
                    <p className="dashboard__column-title">{type.label}</p>
                    <NewTaskForm type={type.id} form={type.id} />
                    <TaskList filterByStatus={type.id} />
                </div>
            );
        });
    }

    render() {
        return <div className="dashboard">{this.renderContent()}</div>;
    }
}

export default TasksDashboard;
