import React, {Component} from 'react'
import HeaderList from './headerList/HeaderList';
import { HeaderContainer } from './HeaderStyled';
import sprite from '../../icons/header/sprite.svg'
import Modal from '../modal/Modal'

class Header extends Component {
    state = {  
      width: window.innerWidth,
      breakPoint: 768,
      isModalOpen: false,
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResizeWindow);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResizeWindow);
    }

    handleResizeWindow = () => {
      if(this.state.width > 768) {
        this.setState({
          width: window.innerWidth,
          isModal:false,
        })
        return;
      }
      this.setState({
        width: window.innerWidth,
        isModal:false,
      }) 
    }

    toggleModal = () => {
      this.setState(prev =>({
        isModalOpen: !prev.isModalOpen
      }))
    }


    render() {
      const {width, breakPoint, isModalOpen} = this.state;
      return (
        <HeaderContainer>
            <a className='headerLogo' href='#'>
                <svg className='headerLogoIcon'>
                    <use href={sprite + "#home"}/>
                </svg>
            </a>
            { width > breakPoint ? <HeaderList/> :  
              <svg className='headerLogoIcon' onClick={this.toggleModal}>
                <use href={sprite + "#menu"}/>
              </svg>
            }
            {(isModalOpen && width < 768) && <Modal closeModal={this.toggleModal}>
                <HeaderList/>
              </Modal>}
        </HeaderContainer>           
        );
    }
}

export default Header;
