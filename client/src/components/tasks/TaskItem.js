import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import taskTypes from './taskTypes';

import * as actions from '../../actions';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 20,
            description: this.props.description
        };
    }

    renderStatuses() {
        return _.map(taskTypes, type => {
            return (
                <option key={type.id} value={type.id}>
                    {type.label}
                </option>
            );
        });
    }

    setValue() {
        console.log(this.state);
    }

    render() {
        return (
            <div className={`task-item task-item--${this.props.type}`}>
                <form className="task-item__form">
                    <textarea
                        defaultValue={this.state.description}
                        className="task-item__input-description"
                        onChange={evt => {
                            this.setState({
                                description: evt.currentTarget.value
                            });
                        }}
                        onKeyDown={evt => {
                            if (evt.keyCode === 13 || evt.keyCode === 27) {
                                evt.preventDefault();
                                evt.currentTarget.blur();
                            }
                        }}
                        onKeyUp={evt => {
                            evt.currentTarget.style.height =
                                this.refs.ghostInput.clientHeight + 'px';
                        }}
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
                    <div ref="ghostInput" className="task-item__ghost-input">
                        {this.state.description}
                    </div>
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
