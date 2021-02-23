import React, { useEffect, useState } from 'react';
import './Baner.css';
import axios from '../axios';
import requests from '../request';


const base_url = "https://image.tmdb.org/t/p/original/";

const Baner = () => {
    const [movie, setMovie] = useState([]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }, []);

    return (
        <header className='baner'
            style={{
                backgroundColor: 'grey',
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            >
            <div className="baner__contents">
                {/* title */}
                <h1 className='baner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                {/* buttons */}
                <div className="baner__buttons">
                    <button className="baner__button">Play</button>
                    <button className="baner__button">My List</button>
                </div>

                {/* description */}
                <h1 className="baner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="baner__fadeBottom"></div>
        </header>
    )
}

export default Baner
