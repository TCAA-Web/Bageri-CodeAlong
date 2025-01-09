import style from "./ProductCard.module.scss";
import { FaComments } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function ProductCard({
  imgSrc,
  numberComments,
  title,
  text,
  id,
  category,
}) {
  return (
    <div className={style.productCard}>
      <img src={imgSrc}></img>
      <span>
        {numberComments}
        <FaComments />
      </span>
      <h3>{title.toUpperCase().split(" ")[0]}</h3>
      <p>{text.substring(0, 40)}...</p>
      <NavLink to={`/products/${category}/${id}`}>SE MERE</NavLink>
    </div>
  );
}
