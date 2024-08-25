import { useEffect, useState, memo } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addToCart } from "@redux/cart/cartSlice";
import { Button } from "react-bootstrap";
import { TProduct } from "@customtypes/product";
import styles from './prod.module.css';

const { product, productImg, productTitle, productPrice, addButton } = styles;

const Product = memo(({ id, title, price, img, max = 10 }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const cartQuantity = useAppSelector(state => state.cart.items[id] || 0);

  const currentQuantity = max - cartQuantity;
  const quantityToMax = currentQuantity <= 0;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    if (!quantityToMax) {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    }
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 className={productTitle}>{title}</h2>
      <h3 className={productPrice}>{price} MAD</h3>
      <p>
        {quantityToMax
          ? "You reached the limit"
          : `You can add ${currentQuantity} item(s)`}
      </p>
      <Button
        variant="danger"
        className={addButton}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityToMax}
      >
        {isBtnDisabled ? "Loading..." : "Add to Cart"}
      </Button>
    </div>
  );
});

export default Product;
