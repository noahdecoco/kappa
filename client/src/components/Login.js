import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Kappa</h1>
                <a href="/auth/google">Login with Google</a>
                <br />
                <a href="/auth/facebook">Login with Facebook</a>
            </div>
        );
    }
}

export default Landing;
