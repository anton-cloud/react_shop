import React from 'react'

const PhoneListItem = ({phoneItem, addToCart}) => {
    const {name,image,description,price, isSale} = phoneItem;
    
    const addProduct = () => addToCart(phoneItem);

    return (
    <li className='PhoneListItem'>
        <h2 className='PhoneTitle'>{name}</h2>
        <div className = "PhoneImgWrap">
            <img src={image} alt={name} className='PhoneImg'/>
        </div>
        <p className='PhoneDesc'><b>Description: </b> {description}</p>
        <p className='PhonePrice'><b>Price: </b> {price}</p>
        <p className='PhoneSale'><b>Sale: </b>{isSale ? 'yes' : 'no'}</p>
        <button type='button' onClick={addProduct}>add to cart</button>
    </li>
    );
}

export default PhoneListItem;