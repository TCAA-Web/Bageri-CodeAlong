import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { Slider } from "../components/Slider/Slider";
import articleImage1 from "../assets/images/article.jpg";
import articleImage2 from "../assets/images/article2.jpg";
import articleImage3 from "../assets/images/article3.jpg";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Section } from "../components/Section/Section";
import { SectionNewsletter } from "../components/SectionNewsletter/SectionNewsletter";
import { useGet } from "../hooks/useGet";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useEffect } from "react";

export function FrontPage() {
  const articleImages = [
    {
      src: articleImage1,
      title: "KREATIVITET DYRKES",
      text: "Der er mange forskellige udgaver af lorem ipsum, men de fleste har gennemgået forandringer når",
    },
    {
      src: articleImage2,
      title: "VI ELSKER BRØD",
      text: "Der er mange forskellige udgaver af lorem ipsum, men de fleste har gennemgået forandringer når",
    },
    {
      src: articleImage3,
      title: "SANS FOR DETALJE",
      text: "Der er mange forskellige udgaver af lorem ipsum, men de fleste har gennemgået forandringer når",
    },
  ];

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/bakeonline/products"
  );

  useEffect(() => {
    document.title = "Forsiden";
  }, []);

  console.log("Data", data);

  return (
    <>
      <Slider />
      <Section width="50%">
        <SectionTitle
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          title="Vi skaber lækkert! brød"
        />
        <GridContainer columns={3}>
          {articleImages.map((item) => {
            return (
              <InfoCard
                imgSrc={item.src}
                infoTitle={item.title}
                infoText={item.text}
              />
            );
          })}
        </GridContainer>
      </Section>
      <SectionNewsletter />
      <Section width={"50%"}>
        <SectionTitle
          text={
            "Der er mange forskellige udgaver af lorem ipsum, men de fleste har gennemgået forandringer når, nogen har tilføjet humor eller tilfældige ord som på ingen måde ser ægte ud"
          }
          title={"Nyeste bagværk"}
        />
        <GridContainer columns={4}>
          {!isLoading &&
            data?.items
              .sort(() => Math.random() - 0.5) // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#:~:text=A%20very%20simple%20way%20for,random()%20%2D%200.5)%3B
              .slice(0, 8)
              .map((item) => {
                return (
                  <ProductCard
                    key={item.title}
                    title={item.title}
                    text={item.teaser}
                    imgSrc={item.image.fullpath}
                    id={item.id}
                    numberComments={item.num_comments}
                  />
                );
              })}
        </GridContainer>
      </Section>
    </>
  );
}
