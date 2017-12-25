import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import taskTypes from './taskTypes';

import * as actions from '../../actions';

class TaskItem extends Component {
    renderStatuses() {
        return _.map(taskTypes, type => {
            return (
                <option key={type.id} value={type.id}>
                    {type.label}
                </option>
            );
        });
    }

    render() {
        return (
            <div className={`task-item task-item--${this.props.type}`}>
                <form className="task-item__form">
                    <input
                        className="task-item__description"
                        type="text"
                        defaultValue={this.props.description}
                        onBlur={evt => {
                            evt.preventDefault();
                            if (
                                this.props.description !==
                                evt.currentTarget.value
                            ) {
                                this.props.updateTask(this.props.id, {
                                    description: evt.currentTarget.value
                                });
                            }
                        }}
                    />
                    <div className="task-item__controls">
                        <select
                            className="task-item__select-status"
                            onChange={evt => {
                                evt.preventDefault();
                                this.props.updateTask(this.props.id, {
                                    type: evt.currentTarget.value
                                });
                            }}
                            value={this.props.type}
                        >
                            {this.renderStatuses()}
                        </select>
                        <button
                            className="task-item__button-delete"
                            onClick={evt => {
                                evt.preventDefault();
                                this.props.deleteTask(this.props.id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(TaskItem);
