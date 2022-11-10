import React from "react";
import Layout from "../../components/Layout";
import "./Category.css";
import products from "../../utils/products.json";
import ProductList from "../../components/ProductList/ProductList";
import verticalBanner from "../../assets/images/vertical-banner.png";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      items: [],
      categoryName: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({
      category: products[categoryName],
      items: products[categoryName].items,
      categoryName: categoryName,
    });
  }

  render() {
    return (
      <Layout>
        <div className="Category min-height">
          <div className="criteria-container">
            <img src={verticalBanner} alt="reduceri" />
          </div>
          <div className="products-container">
            <p>{this.state.category.name}</p>
            <ProductList items={this.state.items} />
          </div>
        </div>
      </Layout>
    );
  }
}
export default Category;
