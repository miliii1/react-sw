import React from 'react';
import Nav from '../Nav/Nav';
import './home.css';

function Home() {
    return (
        <div id='home-page'>
           <Nav url='home' />
               <div className='content'>
                   <section>
                       <h1> Star Wars Yoda </h1>
                       <p>Star Wars Yoda, el sitio web con más info sobre el universo de Star Wars.</p>
                       <p>Aquí encontrará todo lo que necesita saber y volverte un Jedi.</p>
                   </section>
               </div>
        </div>
    )
}

export default Home
