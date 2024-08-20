import { Container, Row, Col } from "react-bootstrap"
import { Product } from "@components/eCom"


const Products = () => {
  return (
    <Container>
        <Row>
          <Col  xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Product />
          </Col>
          <Col  xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Product />
          </Col>
          <Col  xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Product />
          </Col>
          <Col  xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Product />
          </Col>
        </Row>
    </Container>
  )
}

export default Products
