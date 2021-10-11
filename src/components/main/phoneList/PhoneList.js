import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setPhones } from "../../../redux/products/productsActions";
import { getProductsByCategory } from "../../../services/api";
import PhoneListItem from "./phoneListItem.js/PhoneListItem";
import { PhoneListStyled } from "./phoneListItem.js/PhoneListStyled";

const PhoneList = ({ phones, setPhones }) => {
  useEffect(() => {
    getProductsByCategory("phones").then(
      (phones) => phones && setPhones(phones)
    );
  }, [setPhones]);

  return (
    <PhoneListStyled>
      {phones.map((phoneItem) => (
        <PhoneListItem phoneItem={phoneItem} key={phoneItem.id} />
      ))}
    </PhoneListStyled>
  );
};

const mapStateToProps = (state) => ({
  phones: state.products.items.phones,
});


export default connect(mapStateToProps,{setPhones})(PhoneList);
