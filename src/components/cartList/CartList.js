import React from 'react'
import { connect } from 'react-redux';
import CartListItem from './cartListItem/CartListItem';

const CartList = ({cart, removeAllFromCart}) => {

const getTotal = () => cart.reduce((acc,item) => {return acc += Number(item.price)},0)

const makeOrder = () => {removeAllFromCart()}

  return (
  <div>
    <ul>
      {cart.map((product)=> <CartListItem product={product} key={product.id}/>)}
    </ul>
   <hr/>
   <p>Total: {getTotal()} UAN</p>
   <button type='button' onClick={makeOrder}>Checkout</button>
  </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items
})


export default connect(mapStateToProps) (CartList);