import React from 'react'
import './ProductItem.css'
import {Link} from 'react-router-dom'

function ProductItem(props) {
    const { id, brand, model, price, currency, image} = props;
    return (
        <div className="ProductItem">
            <Link to={`/product/${id}`} className="text-link">
                <img src={image} alt={model} />
                <h2>{brand} {model}</h2>
                <h3>{price} {currency}</h3>
            </Link>
            <button>Adauga in cos</button>
        </div>
    )
}

export default ProductItem
