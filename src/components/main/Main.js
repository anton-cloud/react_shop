import { useState, useEffect } from "react";
import { MainContainer } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { createNewAdv, getProductsByCategory } from "../../services/api";
import { mainRoutes } from "../../routes/mainRoutes";

const initialState = {
  cart: [],
  laptops: [],
  phones: [],
};

const Main = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    getProductsByCategory("phones").then(
      (phones) => phones && setState((prev) => ({ ...prev, phones }))
    );
    getProductsByCategory("laptops").then(
      (laptops) => laptops && setState((prev) => ({ ...prev, laptops }))
    );
  }, []);

  const addToCart = (product) => {
    setState((prev) => ({
      ...prev,
      cart: [...prev.cart, product],
    }));
  };

  const addProduct = async (product) => {
    try {
      const id = await createNewAdv(product);
      setState((prev) => ({
        ...prev,
        [product.category]: [...prev[product.category], { ...product, id }],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // удаление одного товара из корзины
  const removeFromCartByID = (id) => {
    setState((prev) => ({
      ...prev,
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));
  };

  // удаление всех товаров из корзины
  const removeAllFromCart = () => setState((prev) => ({ ...prev, cart: [] }));

  const methods = {
    addToCart,
    addProduct,
    removeFromCartByID,
    removeAllFromCart
  }

  return (
    <MainContainer>
      <Switch>
        {mainRoutes.map(({ path, exact, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            // component={component}
            render={(props) => <MyComponent {...props} {...state} {...methods} />}
            key={path}
          />
        ))}
      </Switch>
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
