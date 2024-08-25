import { Container } from "react-bootstrap";
import { CartSubtotal, ShopCartItem } from "@components/eCom";








const Cart = () => {
    return (
        <Container>
            <h1>Cart</h1>
            <ShopCartItem/>
            <ShopCartItem/>
            <CartSubtotal />
        </Container>
    );
};

export default Cart;
