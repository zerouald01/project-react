import styles from './category.module.css'
import { Link } from 'react-router-dom';
import { TCategory } from '@customtypes/category';
const {category, categoryImg, categoryTitle} = styles;



const Category = ({title, img, prefix} : TCategory) => {
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
