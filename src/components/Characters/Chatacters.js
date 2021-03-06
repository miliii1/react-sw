import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Footer from '../Footer';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import './characters.css';


const Home = () => {
    const [personagens, setPersonagens] = useState([])
    const [countPersonagens, setCountPersonagens] = useState(0)
    const [page, setPage] = useState(1)
    const [especies, setEspecies] = useState([])
    const [planetaNatal, setPlanetaNatal] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const contagem = response.data.count
            const personagens = response.data.results

            setCountPersonagens(contagem)
            setPersonagens(personagens)

            
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'

        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/?page=${page}`).then(response => {
            const especies = response.data.results
            const nameEspecies = especies.map(specie => specie.name)
            setEspecies(nameEspecies)
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const planetas = response.data.results
            const namePlanetas = planetas.map(planeta => planeta.name)
            setPlanetaNatal(namePlanetas)

        })
    }, [page])

    function handleNextPage() {
        const currentPage = page + 1
        setPage(currentPage)
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
    }

    return (
        <div id='main'>
            <Nav />

            <div className='count'>
                <h1>TOTAL CHARACTERS: {countPersonagens}</h1>
            </div>

            <div id='content'>
                {personagens.map(personagens => (
                    <div className='card-personajes' key={personagens.name}>
                        <h2>{personagens.name}</h2>
                        <span>Height: {personagens.height / 100} m</span>
                        <span>Mass: {personagens.mass} kg</span>
                        <span>Hair Color: {personagens.hair_color}</span>
                        <span>Skin Color: {personagens.skin_color}</span>
                        <span>Eye Color: {personagens.eye_color}</span>
                        <span>Birth Year: {personagens.birth_year}</span>
                        <span>Gender: {personagens.gender}</span>
                        <span>Species: {
                            especies[String(personagens.species[0]).substr(29, 3).replace('/', '') - 1]
                        }</span>
                        <span>Homeworld: {
                            planetaNatal[String(personagens.homeworld).substr(29, 3).replace('/', '') - 1]
                        }</span>
                    </div>
                ))}

            </div>
            <div className='navigation-page'>
                <button id='btnPrevious' onClick={handlePreviousPage}><FaAngleLeft />PREVIOUS PAGE</button>
                <button id='btnNext' onClick={handleNextPage}>NEXT PAGE<FaAngleRight /></button>
            </div>
            <Footer />
        </div>
    )
}

export default Home