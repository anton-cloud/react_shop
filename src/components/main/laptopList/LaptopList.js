import React, {Component} from 'react'
// import { getAllAdvByCategory } from '../../../services/API';
import LaptopListItem from './laptopListItem/laptopListItem';
import { LaptopListStyled } from './LaptopListStyled';

// class LaptopList extends Component {
//     state = { 
//       laptops: []
//      }

//     async componentDidMount() {
//       const response = await getAllAdvByCategory('laptops');
//       const laptops = Object.keys(response).map((key) => ({
//         id: key,
//         ...response[key],
//       }));
//     }
    
//     render() {
//       const {laptops} = this.state;
//         return (
//           <ul className='LaptopList'>
//             {laptops.map((laptopItem)=><LaptopListItem laptopItem={laptopItem} addToCart={addToCart} key={laptopItem.id}/>)}
//           </ul>  
//         );
//     }
// }

// export default LaptopList;

const LaptopList = ({laptops, addToCart}) => {
    return (
        <LaptopListStyled>
            {laptops.map((laptopItem)=><LaptopListItem laptopItem={laptopItem} addToCart={addToCart} key={laptopItem.id}/>)}
        </LaptopListStyled>
    );
}

export default LaptopList;
