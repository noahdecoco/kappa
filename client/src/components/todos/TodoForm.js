import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class TodoForm extends Component {
    render() {
        const { submitTodo } = this.props;

        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(values => {
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
                        name="status"
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

function mapStateToProps(state, ownProps) {
    return {
        initialValues: {
            status: ownProps.status
        }
    };
}

export default connect(mapStateToProps, actions)(
    reduxForm({
        validate
    })(TodoForm)
);
