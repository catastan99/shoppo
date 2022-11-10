import React from "react";
import Layout from "../../components/Layout";
import "./Cart.css";
import { connect } from "react-redux";
import { ReactComponent as DeleteIcon } from "../../assets/icons/icons8-delete.svg";
import { removeFromCart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";

function Cart(props) {
  let totalPrice = 0;
  console.log(props.products[0]);
  return (
    <Layout>
      <div className="Cart min-height">
        <h2>Coșul dumneavoastră</h2>
        {props.products.length ? (
          props.products.map((product, index) => {
            totalPrice += product.price * product.quantity;
            return (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <Link to={`/product/${product.id}`} className="text-link">
                    <img src={product.image} alt={product.model} />
                  </Link>
                </div>
                <div>
                  <Link to={`/product/${product.id}`} className="text-link">
                    <p>
                      {product.brand} {product.model}
                    </p>
                  </Link>
                  <p>Cantitate: {product.quantity}</p>
                  <p>
                    {product.price} x {product.quantity} ={" "}
                    {product.price * product.quantity} {product.currency}
                  </p>
                </div>
                <DeleteIcon
                  className="cart-item-delete"
                  onClick={() => props.removeFromCart(product)}
                />
              </div>
            );
          })
        ) : (
          <p>Nu aveti produse in cos</p>
        )}
        {props.products.length ? (
          <div>
            <p className="total-sum">
              Total: {totalPrice} {props.products[0].currency}
            </p>
            <button>Finalizeaza comanda</button>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    products: state.cart.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (payload) => dispatch(removeFromCart(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
