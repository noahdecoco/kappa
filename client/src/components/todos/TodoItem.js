import _ from 'lodash';
import React, { Component } from 'react';

import todoStatuses from './todoStatuses';

class TodoItem extends Component {
    renderStatuses() {
        return _.map(todoStatuses, status => {
            return (
                <option key={status.id} value={status.value}>
                    {status.id}
                </option>
            );
        });
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    defaultValue={this.props.todo}
                    onBlur={evt => {
                        evt.preventDefault();
                        if (this.props.todo !== evt.currentTarget.value) {
                            this.props.updateTodo({
                                todo: evt.currentTarget.value
                            });
                        }
                    }}
                />
                <select
                    onChange={evt => {
                        evt.preventDefault();
                        this.props.updateTodo({
                            status: evt.currentTarget.value
                        });
                    }}
                    value={this.props.status}
                >
                    {this.renderStatuses()}
                </select>
                <button type="submit" onClick={this.props.onDelete}>
                    Delete
                </button>
            </form>
        );
    }
}

export default TodoItem;

