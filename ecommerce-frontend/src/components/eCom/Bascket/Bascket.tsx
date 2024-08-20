import Logo from '@assets/cart.svg?react'

import styles from "./bascket.module.css";
const { basketContainer, bascketSize, basketQuantity } = styles;

const Bascket = () => {
  return (
    <div className={basketContainer}>
      <Logo aria-label="basket icon" className={bascketSize} />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default Bascket;