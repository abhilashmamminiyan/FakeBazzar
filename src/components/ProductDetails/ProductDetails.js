import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import ProductCard from '../ProductCard/ProductCard';
import FilterContext from '../../Contexts/FilterContext';
import CartContext from '../../Contexts/CartContext';
function ProductDeatils() {

    const { addToCart } = useContext(CartContext);
    const { productList } = useContext(FilterContext);
    const navigate = useNavigate('/');
    const params = useParams();
    const prodId = params.productId;

    const [product, setProduct] = useState({});

    function loadProductsById() {
        fetch('https://fakestoreapi.com/products/' + prodId).then((response) => {
            response.json().then((data) => {
                setProduct(data);
            }).catch(error => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        })
    }

    function onBackClick() {
        navigate(-1)
    }

    useEffect(() => {
        loadProductsById();

    }, [prodId])

    const recommend = productList.filter((p) => p.category === product.category && p.id !== product.id)
    return (
        <div className='container'>
            <button onClick={onBackClick} >Go Back </button>

            <div className={styles.productDetails}>
                <div className={styles.product}>
                    <img src={product.image} className="card-img-top" alt="..." /> <br />
                    <div className={styles.buttons}>
                        <button onClick={()=> addToCart(product)} className="btn btn-primary">Add To Cart</button>
                        <button href="#" className="btn btn-success">Buy Now</button>
                    </div>

                </div>
                <div className={styles.details}>
                    <h3>{product.title}</h3>
                    <h4> ${product.price} </h4>
                    <p>{product.category}</p>
                    <h5>Available offers</h5>
                    <ul>
                        <li><b>Bank Offer </b>5% cashback on Flipkart Axis Bank Credit Card upto $79 per statement quarterT&C</li>
                        <li><b>Bank Offer </b> 5% cashback on Axis Bank Flipkart Debit Card up to $60 T&C</li>
                        <li><b>Bank Offer </b> Up To $10 Instant Cashback on BHIM Payments App. Min Order Value $50. Offer Valid Once Per UserT&C</li>
                        <li>Special Price Get extra 48% off (price inclusive of cashback/coupon)T&C</li>
                        <li><b>Bank Offer </b> Flat $15 Assured Cashback on Mobikwik UPI. Min Order Value $50. Valid once per Mobikwik accountT&C</li>
                        <li><b>Bank Offer </b> Flat $25 Instant Cashback on Paytm UPI Trxns. Min Order Value $50. Valid once per Paytm accountT&C</li>
                    </ul>
                    <h5>Description</h5>
                    <p> {product.description} </p>
                    <div className={styles.title}>
                        <h4>You may also like</h4>
                    </div>
                    <div className={styles.productContainer}>
                        {
                            recommend.map((p) => {
                                return (
                                    <ProductCard product={p}  key={p.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDeatils;