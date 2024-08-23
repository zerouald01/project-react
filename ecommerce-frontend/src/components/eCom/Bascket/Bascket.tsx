import Logo from '@assets/cart.svg?react';
import styles from './bascket.module.css'
import { useAppSelector } from '@redux/hooks';
import { selectTotalQuantity } from '@redux/cart/cartSlice';
// import { getCartTotalQuantity } from '@redux/cart/cartSlice';

const { basketContainer, bascketSize, basketQuantity } = styles;

const Bascket = () => {
  const totalQuantity = useAppSelector((state) => selectTotalQuantity(state));

  return (
    <div className={basketContainer}>
      <Logo aria-label="basket icon" className={bascketSize} />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default Bascket;