import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Footer from '../Footer';
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
                       <h3>Si información de star wars quieres saber. Esta pagina web debes ver.
                          En la orden secreta encontrarás, toda info del universo de star wars y en un Jedi te convertirás.
                       </h3>
                   </section>

                   <div className='stardetalles'>
                       <div className='cards-stardetalles'>
                           <div>
                               <h1>Characters</h1>
                               <p>Aquí encontraras información acerca de todos los personajes de Star Wars.</p>
                               <Link to='/characters'>View More <FaArrowAltCircleRight /></Link>
                               </div>
                           </div>
                           <div className='cards-stardetalles'>
                           <div>
                               <h1>Planets</h1>
                               <p>Aquí encontraras información acerca de todos los planetas de Star Wars.</p>
                               <Link to='/planets'>View More <FaArrowAltCircleRight /></Link>
                               </div>
                           </div>
                           <div className='cards-stardetalles'>
                           <div>
                               <h1>StarShips</h1>
                               <p>Aquí encontraras información acerca de todos los naves de Star Wars.</p>
                               <Link to='/starships'>View More <FaArrowAltCircleRight /></Link>
                               </div>
                           </div>
                   </div>
               </div>
               <Footer />
        </div>
    )
}

export default Home