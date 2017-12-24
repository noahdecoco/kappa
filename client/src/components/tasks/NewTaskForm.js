import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class NewTaskForm extends Component {
    render() {
        const { createTask, handleSubmit } = this.props;

        return (
            <div>
                <form
                    onSubmit={handleSubmit(values => {
                        createTask(values);
                        this.props.reset();
                    })}
                >
                    <Field
                        name="description"
                        component="input"
                        type="text"
                        placeholder="Description"
                    />

                    <Field name="type" component="input" type="hidden" />
                    <button type="submit">+</button>
                </form>
            </div>
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
