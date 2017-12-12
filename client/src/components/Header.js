import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    renderContent() {
        if (!this.props.auth) return;

        return (
            <div>
                <p>Logged in as: {this.props.auth.displayName}</p>
                <a href="/api/logout">Logout</a>
            </div>
        );
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps, null)(Landing);
