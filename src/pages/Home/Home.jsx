import React from 'react'
import products from '../../utils/products.json'
import Layout from '../../components/Layout';
import './Home.css'
import HomeCategory from '../../components/HomeCategory/HomeCategory';

class Home extends React.Component {

    constructor(){
        super();
        this.state={
            categories:[]
        }
    }

    componentDidMount(){
        const categories= Object.keys(products)
        this.setState({categories});
        
    }


    render() {
        return (
            <Layout>
            <div className="Home min-height">
                <div className="container-announces"></div>
                <div className="container-categories">
                    <h1>Categorii</h1>
                    <div className="categories-list">
                        {
                        this.state.categories.map((category, index)=>{
                        return <HomeCategory
                                        key={index}
                                        route={category}
                                        image={products[category].image}
                                        name={products[category].name}
                                />
                        })
                        }
                    </div>
                </div>
                 
            </div>
            </Layout>
        )
    }
}
export default Home;
