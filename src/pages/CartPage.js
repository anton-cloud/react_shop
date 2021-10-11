import React from 'react'
import { connect } from 'react-redux';
import CartList from '../components/cartList/CartList';
import Section from '../components/section/Section';

const CartPage = ({cart, removeAllFromCart}) => {
  return (
    <Section title="Cart">
    {cart.length > 0 ? (
      <CartList
      cart={cart}
        removeAllFromCart={removeAllFromCart}
      />
    ) : (
      <p>The cart is empty !</p>
    )}
  </Section>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items
})

export default connect(mapStateToProps)(CartPage);