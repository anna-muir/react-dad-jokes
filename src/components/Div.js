import React from 'react'
import { useState, useEffect } from 'react'

const Div = () => {

    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState('')

    async function generateJoke() {

        setLoading('Loading...')
        setJoke('')



        const options = {
            method: 'GET',

        }

        const response = await fetch("http://localhost:8000/jokes", options)
        const json = await response.json()
        setJoke(json[0].joke)

        setLoading('')


    }

    useEffect(() => {
        console.log(joke)
    }, [joke])





    return (
        <div className='div'>
            {loading} <br />
            {joke} <br />
            <button id="generate-btn" className="generate-button" onClick={generateJoke}>Generate</button>
        </div>
    )
}

export default Div
