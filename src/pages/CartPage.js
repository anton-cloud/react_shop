import React from 'react'
import CartList from '../components/cartList/CartList';
import Section from '../components/section/Section';

const CartPage = ({cart, removeFromCartByID, removeAllFromCart}) => {
  return (
    <Section title="Cart">
    {cart.length > 0 ? (
      <CartList
        cart={cart}
        removeFromCart={removeFromCartByID}
        removeAllFromCart={removeAllFromCart}
      />
    ) : (
      <p>The cart is empty !</p>
    )}
  </Section>
  );
}

export default CartPage;