import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import personajes from '../../img/personajes.png';
import naves from '../../img/naves.png';
import planets from '../../img/planets.png';
import './home.css';

function Home() {
    return (
        <div id='home-page'>
           <Nav url='home' />
               <div className='content'>
                   <section>
                       <h1> La orden Estelar </h1>
                       <p>Si información de star wars quieres saber.</p>
                       <p>Esta pagina web debes ver.</p>
                   </section>

                   <div className='stardetalles'>
                       <div className='cards-stardetalles'>
                           <div>
                               <h1>Characters</h1>
                               <p>Aquí encontraras información acerca de todos los personajes de Star Wars.</p>
                               <Link to='/characters'>View More</Link>
                               </div>
                           </div>
                           <div className='cards-stardetalles'>
                           <div>
                               <h1>Planets</h1>
                               <p>Aquí encontraras información acerca de todos los planetas de Star Wars.</p>
                               <Link to='/planets'>View More</Link>
                               </div>
                           </div>
                           <div className='cards-stardetalles'>
                           <div>
                               <h1>StarShips</h1>
                               <p>Aquí encontraras información acerca de todos los naves de Star Wars.</p>
                               <Link to='/starships'>View More</Link>
                               </div>
                           </div>
                   </div>
               </div>
        </div>
    )
}

export default Home