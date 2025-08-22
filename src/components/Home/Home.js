import styles from './Home.module.css';
import Banner1 from '../../assets/images/Banner1.png';
import Banner2 from '../../assets/images/Banner2.png'
import Banner3 from '../../assets/images/Banner3.png';
import Banner4 from '../../assets/images/Banner4.png';
import { useContext } from 'react';
import FilterContext from '../../Contexts/FilterContext';
import { Link } from 'react-router-dom';

function Home() {
    const {productList} = useContext(FilterContext);
    
        const categories = [...new Set(productList.map(p => p.category))];
        
    const styleclassesforHome = [styles.banner]
    const styleclassesforbanner = ["d-block " , styles.bannerimg].join(' ')
    return ( 
        <>
        <div className={styleclassesforHome}>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <Link to={"/products/1"}>
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={ Banner1 } className={ styleclassesforbanner } alt="..."/>
                    </div>
                </Link>
                <Link to={'/products/5'} >
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={ Banner2 } className={ styleclassesforbanner } alt="..."/>
                    </div>
                </Link>
                <Link to={'/products/15'}>
                    <div className="carousel-item">
                    <img src={ Banner3} className={ styleclassesforbanner } alt="..."/>
                    </div>
                </Link>
                <Link>
                    <div className="carousel-item">
                    <img src={ Banner4} className={ styleclassesforbanner } alt="..."/>
                    </div>
                </Link>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <div className={styles.Home}> 
            <div className={styles.products}>
                {
                    ((p)=>{
                        const homeProducts = productList.filter((p) => p).slice(10,15)
                        return (<div >
                            <div>
                                {
                                    homeProducts.map((p) => 
                                    <img src={p.image} alt={p.title}/>)
                                }
                            </div>
                        </div>)
                    })
                }
            </div>
            <div className={styles.grids}>
                {
                    categories.map(cat => {
                        const categoryProducts = productList.filter((p) => p.category === cat).slice(0,1);
                        return (
                        <>
                        <Link to={`/products/${categoryProducts.map((p)=> p.id)}`}>
                        <div className={styles.categoryGrid}>
                                <div className={styles.title}>
                                    <h2>{cat}</h2>
                                </div>
                                <div className={styles.productgrid}>
                                    {categoryProducts.map(p => (
                                        <div className={styles.productcard}>
                                            <img src={p.image} alt={p.title} />
                                            <h5>{p.title}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </Link>
                        </>
                        );
                    })
                }
            </div>

        </div>
        </>
     );
}

export default Home;