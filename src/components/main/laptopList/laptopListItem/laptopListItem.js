import React from 'react'

const LaptopListItem = ({laptopItem, addToCart}) => {
    const {name,image,description,price, isSale} = laptopItem;

    const addProduct = () => addToCart(laptopItem);

    return (
    <li className='LaptopListItem'>
        <h2 className='LaptopTitle'>{name}</h2>
        <div className='LaptopImgWrap'>
            <img src={image} alt={name} className='LaptopImg'/>
        </div>
        <p className='LaptopDesc'><b>Description: </b> {description}</p>
        <p className='LaptopPrice'><b>Price: </b> {price}</p>
        <p className='LaptopSale'><b>Sale: </b>{isSale ? 'yes' : 'no'}</p>
        <button type='button' onClick={addProduct}>add to cart</button>
    </li>
    );
}

export default LaptopListItem;