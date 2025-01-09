import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";

export function ProductDetailsPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );

  console.log("Produkt", data);

  useEffect(() => {
    document.title = `${data?.item.title}`;
  }, [data]);

  return <h2>{data?.item.title}</h2>;
}
