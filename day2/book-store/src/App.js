import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MyNav from './components/MyNav.jsx';
import Welcome from './components/Welcome.jsx';
import LatestBook from './components/LatestBook.jsx';

class App extends React.Component {
    render () {
        return(
        <>
        <MyNav />
        <Welcome />
        <LatestBook />
        </>
        );
    }
}

export default App;
