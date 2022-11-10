import React, { Component } from "react";
import Layout from "../../components/Layout";
import "./Favorite.css";
import { ReactComponent as DeleteIcon } from "../../assets/icons/icons8-delete.svg";
import { connect } from "react-redux";
import { removeFromFavorite } from "../../redux/actions/favorite";
import { Link } from "react-router-dom";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="Favorite min-height">
          <h2>Produsele tale favorite</h2>
          {this.props.products.length ? (
            this.props.products.map((product, index) => {
              // KEY TO BE UPDATED IN THE FUTURE
              return (
                <div key={index} className="favorite-item">
                  <div className="favorite-item-image">
                    <img src={product.image} alt={product.model} />
                  </div>
                  <Link to={`product/${product.id}`} className="text-link">
                    <p>
                      {product.brand} {product.model}
                    </p>
                  </Link>
                  <DeleteIcon
                    className="favorite-item-delete"
                    onClick={() => this.props.removeFromFavorite(product)}
                  />
                </div>
              );
            })
          ) : (
            <p>Nu aveti produse favorite</p>
          )}
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.favorite.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
