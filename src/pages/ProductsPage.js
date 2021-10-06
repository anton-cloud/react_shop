import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import LaptopList from "../components/main/laptopList/LaptopList";
import PhoneList from "../components/main/phoneList/PhoneList";
import Section from "../components/section/Section";
import { productsRoutes } from "../routes/productsRoutes";

const ProductsPage = (ownProps) => {
  const match = useRouteMatch();
  return (
    <>
      <nav>
        <ul>
          {productsRoutes.map((route) => (
            <li key={route.path}>
              <NavLink to={match.url + route.path} exact={route.exact}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map(({path, exact, component: MyComponent}) => (
          <Route
            key={path}
            path={match.url + path}
            exact={exact}
            render={(props)=><MyComponent {...props} {...ownProps}/>}
          />
        ))}
      </Switch>
      {/* <Section title="Phones">
        <PhoneList phones={phones} addToCart={addToCart} />
      </Section>

      <Section title="Laptops">
        <LaptopList laptops={laptops} addToCart={addToCart} />
      </Section> */}
    </>
  );
};

export default ProductsPage;
