import React from 'react'
import IconButton from '../../IconButton/IconButton';
import {ReactComponent as PlusIcon} from '../../../icons/main/plus.svg'
import {ReactComponent as MinusIcon} from '../../../icons/main/minus.svg'
import {ReactComponent as DeleteIcon} from '../../../icons/main/delete.svg'
import { connect } from 'react-redux';
import { removeFromCartByID } from '../../../redux/cart/cartActions';

const CartListItem = ({product, removeFromCartByID}) => {
console.log();
  const {name, price, id} = product;

  const remove = () => {
    console.log(id);
    removeFromCartByID(id)
  }
  
  return (
    <li>
        <h3>{name}</h3>
        <p>{price}</p>
        <IconButton>
          <PlusIcon width='40'/>
        </IconButton>
        <IconButton>
          <MinusIcon width='40'/>
        </IconButton>
        <IconButton onClick={remove}>
          <DeleteIcon width='40'/>
        </IconButton>
      </li>
  );
}

export default connect (null, {removeFromCartByID}) (CartListItem);