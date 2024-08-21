import { Container, Row, Col } from "react-bootstrap"
import { Category } from "@components/eCom"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { useEffect } from "react";
import { actGetCategories } from "@redux/categories/categoriesSlice";
import Loading from "@components/feedback/Loading";

const Categories = () => {

    const dispatch = useAppDispatch();
    const {loading, records, error} = useAppSelector(state => state.categoriesReducer);
    useEffect(()=>{
        if(records.length === 0) {
            dispatch(actGetCategories());
        }
    },[dispatch, records]);

    const categoriesList =
    records.length > 0 ? 
    records.map((category) => {
        return (
            <Col  key={category.id} xs={12} sm={6} md={4} lg={3}>
                <Category {...category} />
            </Col>
        )
    })  : <p>there are no categories</p>   

  return (
    
    <Container>
        <Loading loading={loading} error={error}>
            <Row>
                {categoriesList}
            </Row>
        </Loading>
    </Container>
    

  )
}

export default Categories
