import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import { addToFavorite } from "../../redux/actions/favorite";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart-red.svg";

function ProductItem(props) {
  const { id, brand, model, price, currency, image } = props;
  return (
    <div className="ProductItem">
      <HeartIcon
        className="add-to-favorite-icon"
        title="Adauga la favorite"
        onClick={() =>
          props.addToFavorite({
            product: {
              id,
              brand,
              model,
              price,
              currency,
              image,
            },
          })
        }
      />
      <Link to={`/product/${id}`} className="text-link">
        <img src={image} alt={model} />
        <h2>
          {brand} {model}
        </h2>
        <h3>
          {price} {currency}
        </h3>
      </Link>
      <button
        onClick={() =>
          props.addToCart({
            product: {
              id,
              brand,
              model,
              price,
              currency,
              image,
            },
          })
        }
      >
        Adauga in cos
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorite: (payload) => dispatch(addToFavorite(payload)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
