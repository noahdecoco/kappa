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
            <form>
                <input
                    type="text"
                    defaultValue={this.props.description}
                    onBlur={evt => {
                        evt.preventDefault();
                        if (
                            this.props.description !== evt.currentTarget.value
                        ) {
                            this.props.updateTask(this.props.id, {
                                description: evt.currentTarget.value
                            });
                        }
                    }}
                />
                <select
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
                    onClick={evt => {
                        evt.preventDefault();
                        this.props.deleteTask(this.props.id);
                    }}
                >
                    Delete
                </button>
            </form>
        );
    }
}

export default connect(null, actions)(TaskItem);
