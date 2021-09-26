import React from 'react';
import data from '../../data';


const HeaderList = () => {
    return (
        <ul className='HeaderList'>
           {data.header.map((headerItem)=><li className='HeaderListItem' key={headerItem}>
               {headerItem}
           </li>)} 
        </ul>
    );
}

export default HeaderList;