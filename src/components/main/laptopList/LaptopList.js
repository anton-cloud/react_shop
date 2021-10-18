import { useEffect } from "react";
import { setLaptops } from "../../../redux/products/productsActions";
import { useDispatch, useSelector } from "react-redux";
import LaptopListItem from "./laptopListItem/laptopListItem";
import { LaptopListStyled } from "./LaptopListStyled";
import { getAllAdvByCategoryOperation } from "../../../redux/products/productsOperations";

const LaptopList = () => {
  const laptops = useSelector((state) => state.products.items.laptops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdvByCategoryOperation("laptops", setLaptops));
  }, [dispatch]);
  return (
    <LaptopListStyled>
      {laptops.map((laptopItem) => (
        <LaptopListItem laptopItem={laptopItem} key={laptopItem.id} />
      ))}
    </LaptopListStyled>
  );
};

export default LaptopList;
