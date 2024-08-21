import { Container, Row, Col } from "react-bootstrap"
import { Category } from "@components/eCom"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { useEffect } from "react";
import { actGetCategories } from "@redux/categories/categoriesSlice";

const Categories = () => {

    const dispatch = useAppDispatch();
    const {loading, records, error} = useAppSelector(state => state.categoriesReducer);
    useEffect(()=>{
        dispatch(actGetCategories());
    },[dispatch]);

    const categoriesList =
    records.length === 0 ? null :
    records.map((category) => {
        return (
            <Col  key={category.id} xs={12} sm={6} md={4} lg={3}>
                <Category {...category} />
            </Col>
        )
    })

  return (
    <Container>
        <Row>
            {categoriesList}
        </Row>
    </Container>
  )
}

export default Categories
