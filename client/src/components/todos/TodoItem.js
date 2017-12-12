import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <form>
                <input type="text" defaultValue={this.props.todo} />
                <button onClick={this.props.onToggleCompleted}>
                    {this.props.isCompleted ? 'Undo' : 'Done'}
                </button>
                <button type="submit" onClick={this.props.onDelete}>
                    Delete
                </button>
            </form>
        );
    }
}

export default TodoItem;
