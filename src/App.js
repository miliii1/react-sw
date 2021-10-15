import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Characters from './components/Characters/Chatacters'
import Planets from './components/Planets/Planets'
import Ships from './components/StarShips/Ships'

const App = () => {
    return (
        <BrowserRouter basename='/star-wars-yoda'>
            <Route path='/' exact component={Home} />
            <Route path='/characters' component={Characters} />
            <Route path='/planets' component={Planets} />
            <Route path='/starships' component={Ships} />
        </BrowserRouter>
    )
}

export default App