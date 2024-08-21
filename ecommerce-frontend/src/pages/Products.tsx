import { Container, Row, Col } from "react-bootstrap"
import { Product } from "@components/eCom"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetProducts, clearProducts } from "@redux/products/productsSlice";
import Loading from "@components/feedback/Loading";


const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
    const {loading, records, error} = useAppSelector(state => state.productsReducer);
    useEffect(()=>{
        dispatch(actGetProducts(params.prefix as string));

        return () =>{
          dispatch(clearProducts());
        }

    },[dispatch, params]);

    const productList =
    records.length > 0 ?  
    records.map((prod) => {
        return (
          <Col key={prod.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Product {...prod} />
          </Col>
        )
    }) : <p>there are no products</p>

  return (
    <Container>
        <Loading loading={loading} error={error}>
            <Row>
                {productList}
            </Row>
        </Loading>
        <Row>
            {productList}
        </Row>
    </Container>
  )
}

export default Products
