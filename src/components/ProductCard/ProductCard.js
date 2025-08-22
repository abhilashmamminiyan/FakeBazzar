import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import CartContext from '../../Contexts/CartContext';
import { useContext } from 'react';

function ProductCard(props) {
    const { addToCart } = useContext(CartContext);
    var prod = props.product;
    const productId = prod.id;
    const styleClassesOfCard = ['card' , styles.productCard].join(' ')

    return ( 
        <>
            <div className={ styleClassesOfCard }>
                <Link to={`/products/${productId}`}>
                <img src={ prod.image } className="card-img-top" alt={ prod.title }/>
                </Link>
                <div className="card-body">
                    <Link to={`/products/${productId}`}>
                    <h5 className="card-title">{ prod.title }</h5></Link>
                    <p className="card-text"> ${ prod.price }</p>
                </div>
                <button className='btn btn-primary'onClick={() => addToCart(prod)}>Add To Cart</button>
            </div>
        </>
        
     );
}

export default ProductCard;