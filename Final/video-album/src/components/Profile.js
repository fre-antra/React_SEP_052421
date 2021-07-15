import React from 'react';
import '../css/Profile.css';

import { withRouter } from 'react-router';


async function fetchData(token) {
    return fetch('http://localhost:8080/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    })
    .then(data => data.json());
}

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            profile: undefined
        };

        this.loadProfile = this.loadProfile.bind(this);
    }

    async loadProfile() {
        const { token } = this.props;
        const profile = await fetchData(token);
        this.setState({
            loaded: true,
            profile: profile
        });
    }

    render() {
        const { token, history } = this.props;
        return (
            <div className="profile">
                <div className="profile-title-container">
                    <div className="profile-title">Profile</div>
                </div>

                {this.state.loaded ? (
                    this.state.profile ? (
                        <div className="profile-table-container">

                            <div className="profile-row">
                                <div className="profile-table-cell-1">UID</div>
                                <div className="profile-table-cell-2">{this.state.profile.uid}</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-table-cell-1">Account name</div>
                                <div className="profile-table-cell-2">{this.state.profile.name}</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-table-cell-1">Email</div>
                                <div className="profile-table-cell-2">{this.state.profile.email}</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-table-cell-1">Gender</div>
                                <div className="profile-table-cell-2">{this.state.profile.gender}</div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-table-cell-1">Age</div>
                                <div className="profile-table-cell-2">{this.state.profile.age}</div>
                            </div>

                        </div>
                    ) : (
                        <div className="profile-title-container">You don't have access to this page.</div>
                    )
                ) : (
                    <div className="profile-title-container">Loading...</div>
                )}

                <div className="profile-row profile-row-buttons">
                    <button className="profile-button" onClick={() => history.push("/users/delete/" + token.token.uid)}>Delete User</button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadProfile();
    }
}

export default withRouter (Profile);