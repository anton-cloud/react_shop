import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../../../redux/products/productsActions";
import { getAllAdvByCategoryOperation } from "../../../redux/products/productsOperations";
import PhoneListItem from "./phoneListItem.js/PhoneListItem";
import { PhoneListStyled } from "./phoneListItem.js/PhoneListStyled";

const PhoneList = () => {
  const phones = useSelector((state) => state.products.items.phones);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdvByCategoryOperation("phones", setPhones));
  }, [dispatch]);

  return (
    <PhoneListStyled>
      {phones.map((phoneItem) => (
        <PhoneListItem phoneItem={phoneItem} key={phoneItem.id} />
      ))}
    </PhoneListStyled>
  );
};

export default PhoneList;
