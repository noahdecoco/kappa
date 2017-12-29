import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="login-view">
                <div className="login-view__dialog">
                    <h1 className="login-view__logo">Kappa</h1>
                    <a
                        className="login-view__button-google"
                        href="/auth/google"
                    >
                        Login with Google
                    </a>

                    <a
                        className="login-view__button-facebook"
                        href="/auth/facebook"
                    >
                        Login with Facebook
                    </a>
                </div>
            </div>
        );
    }
}

export default Landing;
