import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset, Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class TodoForm extends Component {
    render() {
        const { submitTodo } = this.props;

        return (
            <div>
                <p>Make a new Todo</p>
                <form
                    onSubmit={this.props.handleSubmit(values => {
                        submitTodo(values);
                    })}
                >
                    <Field
                        name="todo"
                        component="input"
                        type="text"
                        placeholder="Todo"
                    />
                    <button type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values['todo']) errors['todo'] = 'You must enter a value';

    return errors;
};

const onSubmitSuccess = (result, dispatch) => {
    dispatch(reset('TodoForm'));
};

export default connect(null, actions)(
    reduxForm({
        validate,
        onSubmitSuccess,
        form: 'TodoForm'
    })(TodoForm)
);
