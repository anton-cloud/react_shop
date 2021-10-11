import { useEffect } from "react";
import { getProductsByCategory } from "../../../services/api";
import { setLaptops } from "../../../redux/products/productsActions";
import { connect } from "react-redux";
import LaptopListItem from "./laptopListItem/laptopListItem";
import { LaptopListStyled } from "./LaptopListStyled";

const LaptopList = ({ laptops, setLaptops }) => {
  useEffect(() => {
    getProductsByCategory("laptops").then(
      (laptops) => laptops && setLaptops(laptops)
    );
  }, [setLaptops]);
  return (
    <LaptopListStyled>
      {laptops.map((laptopItem) => (
        <LaptopListItem laptopItem={laptopItem} key={laptopItem.id} />
      ))}
    </LaptopListStyled>
  );
};

const mapStateToProps = (state) => ({
  laptops: state.products.items.laptops,
});

export default connect(mapStateToProps, { setLaptops })(LaptopList);
