import styles from "./ProductCard.module.css"

const ProductsCard = ({title, slug, price}) => {
    return <section className = {styles.container}>
        <div>
            <h2>{title}</h2>
            <img src="https://blog.tiendasishop.com/wp-content/uploads/2022/07/productos-tecnologicos-2.webp"/>
        </div>
        <div>
            <p>{slug}</p>
            <h3>{`$ ${price}`}</h3>
            <button>COMPRAR</button>
        </div>   
    </section>
}

export default ProductsCard;