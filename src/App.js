import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Characters from './components/Characters/Chatacters';
import Planets from './components/Planets/Planets';
import Ships from './components/StarShips/Ships';

const App = () => {
    return (
        <BrowserRouter basename='/orden-estelar'>
            <Route path='/' exact component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/characters' component={Characters} />
            <Route path='/planets' component={Planets} />
            <Route path='/starships' component={Ships} />
        </BrowserRouter>
    )
}

export default App