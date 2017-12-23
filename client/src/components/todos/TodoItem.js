import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <form>
                <input type="text" defaultValue={this.props.todo} />
                <select
                    onChange={this.props.onStatusChange}
                    value={this.props.status}
                >
                    <option value="do-it">Do it</option>
                    <option value="doing">Doing</option>
                    <option value="ding-dong">Ding Dong</option>
                    <option value="done">Done</option>
                </select>
                <button type="submit" onClick={this.props.onDelete}>
                    Delete
                </button>
            </form>
        );
    }
}

export default TodoItem;
