import Logo from '@assets/cart.svg?react';
import styles from './bascket.module.css'
import { useAppSelector } from '@redux/hooks';
import { selectTotalQuantity } from '@redux/cart/cartSlice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const { basketContainer, bascketSize, basketQuantity, animate } = styles;

const Bascket = () => {
  const totalQuantity = useAppSelector((state) => selectTotalQuantity(state));
  const [animateQuantity, setAnimateQuantity] = useState(false);

  useEffect(() => { 
    if (totalQuantity > 0) {
      setAnimateQuantity(true);
      setTimeout(() => {
        setAnimateQuantity(false);
      }, 3000);
    }
  }, [totalQuantity]);

  const navigate = useNavigate();
  return (
    <div className={basketContainer} onClick={()=>navigate('/cart')}>
      <Logo aria-label="basket icon" className={bascketSize} />
      <div className={`${basketQuantity} ${animateQuantity ? animate : ''}`}>{totalQuantity}</div>
    </div>
  );
};

export default Bascket;