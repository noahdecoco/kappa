import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

class TaskList extends Component {
    renderList() {
        return _.chain(this.props.tasks)
            .filter(task => {
                return task.type === this.props.filterByType;
            })
            .map(task => {
                return (
                    <li key={task._id} className="task-list__item">
                        <TaskItem
                            description={task.description}
                            type={task.type}
                            id={task._id}
                        />
                    </li>
                );
            })
            .value();
    }

    render() {
        return <ul className="task-list">{this.renderList()}</ul>;
    }
}

const mapStateToProps = ({ tasks }) => {
    return { tasks };
};

export default connect(mapStateToProps, null)(TaskList);
