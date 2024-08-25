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
    const {loading, records, error} = useAppSelector(state => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const prodFullInfo = records.map((el) => ({...el, quantity: cartItems[el.id] || 0}));
    
    useEffect(()=>{
        dispatch(actGetProducts(params.prefix as string));

        return () =>{
          dispatch(clearProducts());
        }

    },[dispatch, params]);


  return (
    <Container>
        <h1> Products <span className="text-danger">{params.prefix}</span> </h1>
        <Loading loading={loading} error={error}>
            <GridList records={prodFullInfo} renderItem={(record) => <Product {...record} />} /> 
        </Loading>
  
    </Container>
  )
}

export default Products
