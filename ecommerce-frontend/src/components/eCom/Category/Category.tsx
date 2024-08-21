import styles from './category.module.css'
import { Link } from 'react-router-dom';

const {category, categoryImg, categoryTitle} = styles;


export interface Props {
  title : string;
  img : string;
  prefix : string;
}
const Category = ({title, img, prefix} : Props) => {
  return (
    <div className={category}>
        <Link to={`/products/${prefix}`}>
          <div className={categoryImg}>
            <img  
                src={img}
                alt={title} />
          </div>
          <h4 className={categoryTitle}>{ title }</h4>
        </Link>
    </div>
  )
}

export default Category
