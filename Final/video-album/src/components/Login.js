import React from 'react';
import '../css/Login.css';

import { withRouter } from 'react-router-dom';

async function loginUser (credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}

class Login extends React.Component {
    constructor(props) {
        super(props);

        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) history.goBack();

        this.state = {
            email: undefined,
            password: undefined
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setEmail (value) {
        this.setState({ email: value });
    }

    setPassword (value) {
        this.setState({ password: value });
    }

    async handleSubmit (e) {
        const { setToken, setIsLoggedIn, history } = this.props;
        e.preventDefault();
        const token = await loginUser({
            email: this.state.email,
            password: this.state.password
        });
        setToken(token);
        setIsLoggedIn(true);
        history.goBack();
    }

    render() {
        return (
            <div className="login-wrapper">
                <h2>Please Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => this.setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => this.setPassword(e.target.value)} />
                    </label>
                    <div className="login-submit">
                        <button className="login-submit" type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter (Login);