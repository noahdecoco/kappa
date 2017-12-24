import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class TodoForm extends Component {
    render() {
        const { submitTodo, handleSubmit } = this.props;

        return (
            <div>
                <form
                    onSubmit={handleSubmit(values => {
                        submitTodo(values);
                        this.props.reset();
                    })}
                >
                    <Field
                        name="todo"
                        component="input"
                        type="text"
                        placeholder="Description"
                    />

                    <Field
                        name="type"
                        component="input"
                        type="text"
                        type="hidden"
                    />
                    <button type="submit">+</button>
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

const mapStateToProps = (state, { type }) => {
    return {
        initialValues: { type }
    };
};

export default connect(mapStateToProps, actions)(
    reduxForm({ validate })(TodoForm)
);
