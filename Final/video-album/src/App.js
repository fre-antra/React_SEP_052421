import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Album from './components/Album';
import Browse from './components/Browse';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';


function setToken (tokenValue) {
    if (tokenValue) {
        sessionStorage.setItem('token', JSON.stringify(tokenValue));
    } else {
        sessionStorage.removeItem('token');
    }
}

function getToken () {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = function () {
        setToken(undefined);
        setIsLoggedIn(false);
    };
    return (
        <>
        <BrowserRouter>
            <Navigation isLoggedIn={isLoggedIn} token={getToken()} handleLogout={handleLogout} />
            <Switch>
                <Route exact path="/"><Main /></Route>
                <Route exact path="/dashboard"><Dashboard /></Route>
                <Route exact path="/album/:aid" component={Album} />
                <Route exact path="/browse"><Browse /></Route>
                <Route exact path="/profile"><Profile token={getToken()} /></Route>
                <Route exact path="/login"><Login setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /></Route>
                <Route exact path="/signup"><Signup setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /></Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}