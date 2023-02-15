import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../utils/services";
import { useContext } from "react";
import { productsContext } from "../context/productsContext";


const Products = () => {
    const [products, setProducts] = useState([]);
    const {addProduct} = useContext(productsContext)
    const navigate = useNavigate();
    

    useEffect(() => {
        getProducts().then((data) => {
            // console.log(data.data)
            setProducts(data.data);
        })
    },[])

    const handlerClick = (product) => {
        addProduct(product)
        navigate("/detailsProduct");
    }

    return <div>
        {products.map((product) =>{return <div onClick={() => {handlerClick(product)}} key={product.id}>{product.name}</div>})}
    </div>
}

export default Products;