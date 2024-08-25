import { Button, Col, Row, Image, Form } from "react-bootstrap";
import styles from './cart.module.css';


const { shopCartItemRow, productImg, productTitle, productPrice, quantityInput, removeBtn } = styles;
// Using function syntax
function ShopCartItem() {
    return (
        <Row className={`${shopCartItemRow} align-items-center`}>
            <Col xs={3}> 
                <Image src='https://eg.hm.com/assets/styles/HNM/12652575/3e316aab8ce1b596545d144d0efd362975b3856f/2/image-thumb__1998684__product_listing/48756e509aa05341e4a618ba4c1b0a5ce24ebcae.jpg' alt='img' fluid rounded className={productImg} />
            </Col>
            <Col xs={2}>
                <h5 className={productTitle}>Title</h5>
            </Col>    
            <Col xs={2}>
                <Form.Control
                    type="number"
                    min={1}
                    placeholder="0"
                    className={quantityInput}
                />
            </Col>
            <Col xs={3}>
                <p className={productPrice}>Price : 100.00 MAD</p> 
            </Col>
            <Col xs={1}>
                <Button
                    variant="danger"
                    className={removeBtn}
                >
                    Remove
                </Button>
            </Col>
        </Row>
    );
}

export default ShopCartItem;
