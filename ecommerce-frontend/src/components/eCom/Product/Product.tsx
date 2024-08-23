import { Button } from "react-bootstrap"
import styles from './prod.module.css'
import { TProduct } from "@customtypes/product"
import { useAppDispatch } from "@redux/hooks"
import { addToCart } from "@redux/cart/cartSlice"
import { useState, useCallback } from "react"

const {product, productImg, productTitle, productPrice, addButton } = styles

const Product = ({id, title, price, img }: TProduct) => {

  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const debounceAddToCart = useCallback(()=>{
    if(!isAdding) {
      setIsAdding(true);  
      dispatch(addToCart(id));
      setTimeout(() => {
        setIsAdding(false);
      }, 300);
    }
  },[isAdding, dispatch, id])
 

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
      <Button variant="danger" className={addButton} onClick={debounceAddToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default Product
