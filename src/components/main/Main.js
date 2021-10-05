import  { useState, useEffect } from "react";
import { MainContainer } from "./MainStyled";
import CartList from "../cartList/CartList";
import Section from "../section/Section";
import LaptopList from "./laptopList/LaptopList";
import PhoneList from "./phoneList/PhoneList";
import AdvForm from "../admin/AdvForm";
import { createNewAdv, getProductsByCategory } from "../../services/api";

const initialState = {
  cart: [],
  laptops: [],
  phones: [],
};

const Main = () => {

  const [state, setState] = useState({...initialState});

  useEffect(() => {
    getProductsByCategory('phones')
      .then(phones => phones && setState(prev => ({...prev, phones})));
    getProductsByCategory('laptops')
      .then(laptops => laptops && setState(prev => ({...prev,laptops})));
  }, [])
  
  const addToCart=(product) => {
    setState(prev => ({
      ...prev,
      cart: [...prev.cart, product],
    }))
  }

   const addProduct = async(product) => {
    try {
      const id = await createNewAdv(product)
      setState((prev) => ({
       ...prev,
      [product.category]:[...prev[product.category], {...product, id}]
      }))
    }
    catch (error) {
      console.log(error);
    }
  }

  // удаление одного товара из корзины
  const removeFromCartByID =(id)=> {
    setState ((prev) => ({
    ...prev,
    cart:[...prev.cart.filter((product) => product.id !== id)]
    }))
  }

  // удаление всех товаров из корзины
  const removeAllFromCart = () => setState(prev => ({...prev, cart: []}));

  return (
    <MainContainer>
      <Section title="Cart">
        {state.cart.length > 0 ? (
          <CartList
            cart={state.cart}
            removeFromCart={removeFromCartByID}
            removeAllFromCart={removeAllFromCart}
          />
        ) : (
          <p>The cart is empty !</p>
        )}
      </Section>

      <Section title="Administration">
        <AdvForm addProduct={addProduct} />
      </Section>

      <Section title="Phones">
        <PhoneList phones={state.phones} addToCart={addToCart} />
      </Section>

      <Section title="Laptops">
        <LaptopList laptops={state.laptops} addToCart={addToCart} />
      </Section>
    </MainContainer>
  );
};

export default Main;

// ======================класс===========================

// class Main extends Component {

//   state = {
//     cart: [],
//     laptops: [],
//     phones: [],
//   };

//   componentDidMount () {
//     getProductsByCategory('phones')
//       .then(phones => phones && this.setState({phones}));
//     getProductsByCategory('laptops')
//       .then(laptops => laptops && this.setState({laptops}));
//   }

//   // добавление товара в корзину
//   addToCart=(product) => {
//     this.setState((prev) => ({
//       cart: [...prev.cart, product],
//     }))
//   }

//    addProduct = async(product) => {
//     try {
//       const id = await createNewAdv(product)
//       this.setState((prev) => ({
//         [product.category]:[...prev[product.category], {...product, id}]
//       }))
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }

//   // удаление одного товара из корзины
//   removeFromCartByID =(id)=> {
//     this.setState ((prev) => ({
//       cart:[...prev.cart.filter((product) => product.id !== id)]
//     }))
//   }

//   // удаление всех товаров из корзины
//   removeAllFromCart =() => this.setState({cart: []});

//   render() {
//     const {cart, phones, laptops} =this.state;
//     return (
//       <MainContainer>

//         <Section title='Cart'>
//           {cart.length > 0 ? <CartList cart={cart} removeFromCart={this.removeAllFromCart} removeAllFromCart={this.removeAllFromCart}/> : <p>The cart is empty !</p>}
//         </Section>

//         <Section title='Administration'>
//           <AdvForm addProduct={this.addProduct}/>
//         </Section>

//         <Section title="Phones">
//           <PhoneList phones={phones} addToCart={this.addToCart} />
//         </Section>

//         <Section title='Laptops'>
//           <LaptopList laptops={laptops} addToCart={this.addToCart}/>
//         </Section>
//       </MainContainer>
//     );
//   }
// }

// export default Main;
