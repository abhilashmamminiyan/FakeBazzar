import { createContext } from "react";

const initialFilterParams = {
    productList:[],
    category:[],
}
const FilterContext = createContext(initialFilterParams);
export default FilterContext;