import React from 'react'

const LaptopListItem = ({laptopItem}) => {
    const {name,image,description,price, isSale} = laptopItem;
    return (
    <li className='LaptopListItem'>
        <h2 className='LaptopTitle'>{name}</h2>
        <img src={image} alt={name} className='LaptopImg'/>
        <p className='LaptopDesc'><b>Description: </b> {description}</p>
        <p className='LaptopPrice'><b>Price: </b> {price}</p>
        <p className='LaptopSale'><b>Sale: </b>{isSale ? 'yes' : 'no'}</p>
    </li>
    );
}

export default LaptopListItem;