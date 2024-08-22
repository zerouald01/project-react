import { Container } from "react-bootstrap"
import { Product } from "@components/eCom"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetProducts, clearProducts } from "@redux/products/productsSlice";
import Loading from "@components/feedback/Loading";
import { GridList } from "@components/common";


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


  return (
    <Container>
        <Loading loading={loading} error={error}>
            <GridList records={records} renderItem={(record) => <Product {...record} />} /> 
        </Loading>
  
    </Container>
  )
}

export default Products
