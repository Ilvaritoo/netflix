import React, { useState } from 'react'

const Row = ({title}) => {

    const [movies, setMovies] = useState([]);
    
    return (
        <div>
            {/* title */}
                <h2>{title}</h2>
            {/* container - posters */}
        </div>
    )
}

export default Row
