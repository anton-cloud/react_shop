import React, {Component} from 'react';
import { MainContainer } from './MainStyled';
import data from '../../data';
import CartList from '../cartList/CartList';
import Section from '../section/Section';
import LaptopList from './laptopList/LaptopList';
import PhoneList from './phoneList/PhoneList';

class Main extends Component {

  state = {
    cart: [],
  };

  // добавление товара в корзину 
  addToCart=(product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }))
  }

  // удаление одного товара из корзины
  removeFromCartByID =(id)=> {
    this.setState ((prev) => ({
      cart:[...prev.cart.filter((product) => product.id !== id)]
    }))
  }

  // удаление всех товаров из корзины
  removeAllFromCart =() => this.setState({cart: []});

  render() {
    const {cart} =this.state;
    return (
      <MainContainer>

      <Section title='Cart'> 
        {cart.length > 0 ? <CartList cart={cart} removeFromCart={this.removeFromCartByID} removeAllFromCart={this.removeAllFromCart}/> : <p>The cart is empty !</p>}
      </Section>

        <Section title="Phones">
          <PhoneList phones={data.phones} addToCart={this.addToCart} />
        </Section>

        <Section title='Laptops'>
          <LaptopList laptops={data.laptops} addToCart={this.addToCart}/>
        </Section>
      </MainContainer>
    );
  }
}

export default Main;