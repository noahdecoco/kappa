import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    renderContent() {
        if (!this.props.auth) return;

        return (
            <header className="header">
                <p className="header__welcome">
                    Hello, {this.props.auth.displayName}
                </p>
                <a className="header__button-logout" href="/api/logout">
                    Logout
                </a>
            </header>
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
