import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import taskTypes from './taskTypes';

import * as actions from '../../actions';

class TasksDashboard extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    renderContent() {
        return _.map(taskTypes, type => {
            return (
                <div
                    className={`dashboard__column dashboard__column--${
                        type.id
                    }`}
                    key={type.id}
                >
                    <p className="dashboard__column-title">{type.label}</p>
                    <NewTaskForm type={type.id} form={type.id} />
                    <TaskList filterByType={type.id} />
                </div>
            );
        });
    }

    render() {
        return <div className="dashboard">{this.renderContent()}</div>;
    }
}

export default connect(null, actions)(TasksDashboard);
