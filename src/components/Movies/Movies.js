import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Footer from '../Footer';
import './movies.css';
// https://swapi.dev/api/films/

const Movies = () => {
    const [filmes, setFilmes] = useState([])
    const [countMovies, setCountMovies] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/?page=${page}`).then(response => {
            const contagem = response.data.count
            const filmes = response.data.results

            setCountMovies(contagem)
            setFilmes(filmes)
        })
    }, [page])

    return (
        <div id='main'>
            <Nav />
            <div className='count'>
                <h1>TOTAL MOVIES: {countMovies}</h1>
            </div>

            <div id='content'>
                {filmes.map(filmes => (
                    <div className='card-movies' key={filmes.title}>
                        <h2>{filmes.title}</h2>
                        <span>• Episode: {filmes.episode_id}</span>
                        <span>• Premiere: {filmes.release_date}</span>
                        <span>• Description: {filmes.opening_crawl}</span>
                        <span>• Director: {filmes.director}</span>
                        <span>• Producer: {filmes.producer}</span>
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    )
}

export default Movies
