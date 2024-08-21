import { Button } from "react-bootstrap"
import styles from './prod.module.css'
import { TProduct } from "@customtypes/product"

const {product, productImg, productTitle, productPrice, addButton } = styles

const Product = ({ title, price, img }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg} >
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2 className={productTitle}>{title}</h2>
      <h3 className={productPrice}>{price} MAD</h3>
      <Button variant="danger" className={addButton}>
        Add to cart
      </Button>
    </div>
  )
}

export default Product
