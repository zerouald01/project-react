import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"
import { Container } from "react-bootstrap"
import styles from './Error.module.css'


const Error = () => {
    const error = useRouteError();
    let errorStatus : number;
    let errorStatusText : string;
    if(isRouteErrorResponse(error)){
        errorStatus = error.status;
        errorStatusText = error.statusText;
    }else {
        errorStatus = 404;
        errorStatusText = 'Not Found';
    }
  return (
    <Container className={styles.pageError}>
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to='/' replace={true}>
            Back To Home Page 
      </Link>
    </Container>
  )
}


export default Error
