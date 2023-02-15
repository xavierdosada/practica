import { useContext } from "react";
import { productsContext } from "../context/productsContext";


const DetailProduct = () => {
    const {selectedProduct} = useContext(productsContext)
    console.log(selectedProduct)
    return <div>{selectedProduct.name}</div>
}

export default DetailProduct;