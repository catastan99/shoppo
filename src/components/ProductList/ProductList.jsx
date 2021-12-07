import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

function ProductList(props) {
    const {items} = props;
    return (
        <div className="ProductList">
            {
                items.map((item)=>{
                    return <ProductItem 
                                key={item.id}
                                {...item}
                            />
                })
            }
        </div>
    )
}

export default ProductList
