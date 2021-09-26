import React from 'react'

const PhoneListItem = ({phoneItem}) => {
    const {name,image,description,price, isSale} = phoneItem;
    return (
    <li className='PhoneListItem'>
        <h2 className='PhoneTitle'>{name}</h2>
        <img src={image} alt={name} className='PhoneImg'/>
        <p className='PhoneDesc'><b>Description: </b> {description}</p>
        <p className='PhonePrice'><b>Price: </b> {price}</p>
        <p className='PhoneSale'><b>Sale: </b>{isSale ? 'yes' : 'no'}</p>
    </li>
    );
}

export default PhoneListItem;