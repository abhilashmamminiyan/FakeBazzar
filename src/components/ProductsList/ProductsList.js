import { useContext} from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductList.module.css';  
import FilterContext from "../../Contexts/FilterContext";
import SearchContext from "../../Contexts/SearchContext";
import { useLocation } from 'react-router-dom';
const ProductList = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  const {productList} = useContext(FilterContext);
  const { searchTerm } = useContext(SearchContext);
    
  const activeSearch = searchQuery || searchTerm;
  const filteredProducts =  productList.filter((prod)=>
    prod.title.toLowerCase().includes(activeSearch.toLowerCase())
  );
  return (
    <>
        
        <div className={styles.productContainer}>
        {filteredProducts.map((p) => {
          return (
            <ProductCard product={p} key={p.id} />
        )
        })}
        {
          filteredProducts.length === 0 && (
          <div className={styles.textmuted}><p>No products found</p>
          </div>
        )
        }
      </div>
    </>
  );
};

export default ProductList;