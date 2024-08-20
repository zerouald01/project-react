import { Container, Row, Col } from "react-bootstrap"
import { Category } from "@components/eCom"

const Categories = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
                <Category />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <Category />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <Category />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <Category />
            </Col>
        </Row>
    </Container>
  )
}

export default Categories
