import React from 'react'
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, removeFromCart, removeAllFromCart}) => {

const getTotal = () => cart.reduce((acc,item) => {return acc += item.price},0)

const makeOrder = () => {removeAllFromCart()}

  return (
  <div>
    <ul>
      {cart.map((product)=> <CartListItem product={product} removeFromCart={removeFromCart} key={product.id}/>)}
    </ul>
   <hr/>
   <p>Total: {getTotal()} UAN</p>
   <button type='button' onClick={makeOrder}>Checkout</button>
  </div>
  );
}

export default CartList;