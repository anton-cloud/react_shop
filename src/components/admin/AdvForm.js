import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AdvFormStyled } from './AdvFormStyled';

const categories = ['phones', 'laptops']

const initialState = {
  category: categories[0],
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
}

class AdvForm extends Component {

  state = {
    ...initialState
  };

  onHandleChange = (e) => {
    const {name, value, type} = e.target;
     if(type === 'checkbox') {
       this.setState(prev => ({
         [name]: !prev[name]
       }))
      return
      } 
     if (type === 'file') {

        this.toDataURL(e.target).then((result) => this.setState({image: result}))
      return
     }
        this.setState({
       [name]: value,
       })
     
  }

  //  перетворення img в base64

   toDataURL = (element) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  }

 //! (без API))
  // onHandleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.addProduct({...this.state, id: uuidv4()})
  //   this.setState({
  //     ...initialState
  //   })
  // }

  //!(API)
  onHandleSubmit = (e) => {
    const {name , image , description , price} = this.state;
    e.preventDefault()
    if(name && image && description && price){
      this.props.addProduct(this.state)
      this.setState({
        ...initialState
      })
      return
    }
    return alert('Fill in all the fields !');
  }

  render() {

    const {name, image, description, price, isSale, category} = this.state;

    return (
      <AdvFormStyled   onSubmit={this.onHandleSubmit}>
        <div className='AdvFormWrap'>
        <label className='AdvFormLabel'>
          Category:
          <select name='category' onChange={this.onHandleChange} value={category}>
            {categories.map((category)=> <option value={category} key={category}>
              {category}
            </option>)}
          </select>
        </label>
        <label className='AdvFormLabel'>
          Product's name: 
          <input
          className='AdvFormInput'
          type='text'
          name='name'
          value={name}
          onChange={this.onHandleChange}
          />
        </label>
        
        {image && <img src={image} alt='img'/>}
        <label className='AdvFormLabel'>
          Image
          <input
          className='AdvFormInput'
          type='file'
          name='image'
          onChange={this.onHandleChange}
          />
        </label>

        <label className='AdvFormLabel'>
          Description
          <textarea
          className='AdvFormTextarea'
          type='text'
          name='description'
          value={description}
          onChange={this.onHandleChange}
          />
        </label>

        <label className='AdvFormLabel'>
          Price
          <input
          className='AdvFormInput'
          type='text'
          name='price'
          value={price}
          onChange={this.onHandleChange}
          />
        </label>
        
        <label className='AdvFormLabel'>
          Sale
          <input
          className='AdvFormCheckBox'
          type='checkbox'
          name='isSale'
          checked={isSale}
          onChange={this.onHandleChange}
          />
        </label>

        <button type='submit' onClick={this.onHandleSubmit}>Add product</button>
        </div>
      </AdvFormStyled>
    );
  }
}

export default AdvForm;