import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

document.body.style = 'background: mediumseagreen;';

const SignInPage = () => (
    <div className="signInForm centered-container row">
        <div className="col-4 col-s-8">
        <SignInForm />
        <SignUpLink />
        <PasswordForgetLink />
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    className="signInField"
                    id="emailAddress"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="signInField"
                    id="passwordPlease"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button className="signInField signInButton" disabled={isInvalid} type="submit">
                    Log In
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

const SignInLink = () => (
    <p className="signInLink center">
        Already have an account? <Link to={ROUTES.SIGN_IN}>Log in</Link>
    </p>
);

const SignInLink2 = () => (
    <p className="signInLink center">
        Go back to <Link to={ROUTES.SIGN_IN}>Log in</Link>
    </p>
);

export default SignInPage;

export { SignInForm, SignInLink, SignInLink2 };
