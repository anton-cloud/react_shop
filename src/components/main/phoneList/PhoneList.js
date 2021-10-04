import React from 'react'
import PhoneListItem from './phoneListItem.js/PhoneListItem';
import { PhoneListStyled } from './phoneListItem.js/PhoneListStyled';


const PhoneList = ({phones, addToCart}) => {
    return (
        <PhoneListStyled>
            {phones.map((phoneItem)=><PhoneListItem phoneItem={phoneItem} addToCart={addToCart} key={phoneItem.id}/>)}
        </PhoneListStyled>
    );
}

export default PhoneList;