import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';

class NewTaskForm extends Component {
    render() {
        const { createTask, handleSubmit } = this.props;

        return (
            <form
                className="form-new-task"
                onSubmit={handleSubmit(values => {
                    createTask(values);
                    this.props.reset();
                })}
            >
                <Field
                    className="form-new-task__input-description"
                    name="description"
                    component="input"
                    type="text"
                    placeholder="Description"
                />

                <Field name="type" component="input" type="hidden" />
                <button className="form-new-task__button-submit" type="submit">
                    +
                </button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values['description'])
        errors['description'] = 'You must enter a value';

    return errors;
};

const mapStateToProps = (state, { type }) => {
    return {
        initialValues: { type }
    };
};

export default connect(mapStateToProps, actions)(
    reduxForm({ validate })(NewTaskForm)
);
