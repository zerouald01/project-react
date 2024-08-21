import { TLoading } from "@customtypes/loading";


export interface Props {
    loading : TLoading;
    error : null | string;
    children : React.ReactNode
}

const Loading = ({loading, error, children} : Props ) =>{
    if(loading === 'pending'){
        return <p>Loading ...</p>;
    }
    if(loading === 'failed'){
        return <p>{error}</p>;
    }    
    return <div>{children}</div>       
}
export default Loading