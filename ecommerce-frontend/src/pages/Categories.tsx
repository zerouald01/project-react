import { Container } from "react-bootstrap"
import { Category } from "@components/eCom"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { useEffect } from "react";
import { actGetCategories } from "@redux/categories/categoriesSlice";
import Loading from "@components/feedback/Loading";
import { GridList } from "@components/common";

const Categories = () => {

    const dispatch = useAppDispatch();
    const {loading, records, error} = useAppSelector(state => state.categories);
    useEffect(()=>{
        if(records.length === 0) {
            dispatch(actGetCategories());
        }
    },[dispatch, records]);

   

  return (
    
    <Container>
        <Loading loading={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Category {...record} />} />
        </Loading>
    </Container>
    

  )
}

export default Categories
