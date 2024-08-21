import styles from './category.module.css'
import { Link } from 'react-router-dom';
import { TCategory } from '@customtypes/category';
const {category, categoryImg, categoryTitle, skeleton} = styles;
import { useState } from 'react';



const Category = ({title, img, prefix} : TCategory) => {

  const [isLoading, setIsLoading] = useState(true);

  const handlImageLoad = () => {
    setIsLoading(false);
  }
  return (
    <div className={category}>
        <Link to={`/products/${prefix}`}>
          <div className={categoryImg}>
            { isLoading && <div className={skeleton}></div>}
            <img 
                src={img} alt={title}
                style={{ display: isLoading ? 'none' : 'block' }}
                onLoad={handlImageLoad} />
          </div>
          <h4 className={categoryTitle}>{ title }</h4>
        </Link>
    </div>
  )
}

export default Category
