import React from 'react'
import './HomeCategory.css'
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {name, image, route} = props;
    
    return (
        <div className="HomeCategory">
            <Link to={`/category/${route}`} className="text-link">
            <img src={image} alt={name} />
            <p>{name}</p>
            </Link>
        </div>
    )
}

export default HomeCategory
