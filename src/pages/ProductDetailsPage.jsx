import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";
import { Section } from "../components/Section/Section";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductHeading } from "../components/ProductHeading/ProductHeading";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { IngredientList } from "../components/IngredientList/IngredientList";

export function ProductDetailsPage() {
  const { category, id } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );

  console.log("Produkt", data);

  useEffect(() => {
    document.title = `${data?.item.title}`;
  }, [data]);

  return (
    <>
      <Section width="50%">
        <Breadcrumb content={`produkter > ${category} > ${data?.item.title}`} />
        <ProductHeading
          productTitle={data?.item.title}
          productSubtitle={category}
        />
      </Section>
      <Section width="50%">
        <GridContainer columns={2}>
          <ProductDescription
            textContent={data?.item.description}
            imgSrc={data?.item.image.fullpath}
          />

          {data && <IngredientList ingredients={data?.item.ingredients} />}
        </GridContainer>
      </Section>
    </>
  );
}
