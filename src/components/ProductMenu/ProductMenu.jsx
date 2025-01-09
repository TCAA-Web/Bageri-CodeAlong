import { useGet } from "../../hooks/useGet";
import style from "./ProductMenu.module.scss";

export function ProductMenu({ setId }) {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/bakeonline/categories"
  );

  console.log("ProductMenu", data);

  return (
    <aside className={style.sidemenu}>
      <ul>
        {!isLoading &&
          data?.items.map((item) => {
            return (
              <li key={item.id} onClick={() => setId(item.id)}>
                {item.title}
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
