import React, {Component} from 'react';
import { MainContainer } from './MainStyled';
import data from '../../data';
import CartList from '../cartList/CartList';
import Section from '../section/Section';
import LaptopList from './laptopList/LaptopList';
import PhoneList from './phoneList/PhoneList';
import AdvForm from '../admin/AdvForm';

class Main extends Component {

  state = {
    cart: [],
    laptops: [...data.laptops],
    phones: [...data.phones],
  };

  // добавление товара в корзину 
  addToCart=(product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }))
  }

  // добавление товара по категориям
  addProduct = (product) => {
    this.setState((prev) => ({
      [product.category]:[...prev[product.category], product]
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
    const {cart, phones, laptops} =this.state;
    return (
      <MainContainer>

        <Section title='Cart'> 
          {cart.length > 0 ? <CartList cart={cart} removeFromCart={this.removeAllFromCart} removeAllFromCart={this.removeAllFromCart}/> : <p>The cart is empty !</p>}
        </Section>

        <Section title='Administration'> 
          <AdvForm addProduct={this.addProduct}/>
        </Section>

        <Section title="Phones">
          <PhoneList phones={phones} addToCart={this.addToCart} />
        </Section>

        <Section title='Laptops'>
          <LaptopList laptops={laptops} addToCart={this.addToCart}/>
        </Section>
      </MainContainer>
    );
  }
}

export default Main;