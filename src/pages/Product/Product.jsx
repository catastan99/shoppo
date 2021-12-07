import React, { Component } from 'react'
import Layout from '../../components/Layout'
import './Product.css';
import products from '../../utils/products.json';

export class Product extends Component {

    constructor(props){
        super(props);
        this.state={
            product:{}
        }
    }

    componentDidMount(){
        const {match} = this.props
        const productId = match.params.productId;
        const categoryValues=Object.values(products);
        //----------------------------------------------------------------------
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        //--------------------------------------------------------------------------
        this.setState({product: currentProduct});
    }


    render() {
        return (
            <Layout>
                <div className="Product min-height">
                    <div className="product-image">
                        <img src={this.state.product.image} alt={this.state.product.model}  />
                    </div>
                    <div className="product-details">
                            <h1>{this.state.product.brand} {this.state.product.model}</h1>
                            <h2>{this.state.product.price} {this.state.product.currency}</h2>
                            <button>Adauga in cos</button>
                            <p><b>Culoare:</b> {this.state.product.colour}</p>
                            <p><b>Descriere:</b> {this.state.product.description}</p>

                    </div>
                </div>
            </Layout>
        )
    }
}

export default Product
