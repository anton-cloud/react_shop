import React from 'react'
import PhoneListItem from './phoneListItem.js/PhoneListItem';


const PhoneList = ({phones, addToCart}) => {
    return (
        <ul className='PhoneList'>
            {phones.map((phoneItem)=><PhoneListItem phoneItem={phoneItem} addToCart={addToCart} key={phoneItem.id}/>)}
        </ul>
    );
}

export default PhoneList;