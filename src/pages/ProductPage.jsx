import { useState } from 'react'
import { ProductMenu } from '../components/ProductMenu/ProductMenu'
import { useGet } from '../hooks/useGet'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { Section } from '../components/Section/Section'
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { usePageTitle } from '../hooks/usePageTitle'

export function ProductPage() {
  const [id, setId] = useState(1)
  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/categories/${id}`
  )
  usePageTitle('Product page')

  console.log('Produkter', data)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <b>Error: {error?.message}</b>
  }

  return (
    <>
      <Section width={'50%'}>
        <SectionTitle
          title={'Vores elskede bagværk!'}
          text={
            'Lorem ipsum er en gammel ting, der har haft mange forskellige iterationer. Det er sjovest når man blander det med til tilfældige ord'
          }
        />
        <SectionTitle title={data?.item.title} />
        <GridContainer
          columns={2}
          sx={{ gridTemplateColumns: '1fr 4fr', alignItems: 'start' }}
        >
          <ProductMenu setId={setId} />
          <GridContainer columns={4}>
            {data?.item.products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  imgSrc={product.image.fullpath}
                  numberComments={product.num_comments}
                  title={product.title}
                  text={product.teaser}
                  id={product.id}
                  category={data?.item.title}
                />
              )
            })}
          </GridContainer>
        </GridContainer>
      </Section>
    </>
  )
}
