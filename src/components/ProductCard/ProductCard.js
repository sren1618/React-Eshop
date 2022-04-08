import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import Button from '../Button/Button';
import './ProductCard.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

  const { addItemToCart } = useContext(CartContext)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => {addItemToCart(product)}}>Add to card</Button>
    </div>
  );
};

export default ProductCard;