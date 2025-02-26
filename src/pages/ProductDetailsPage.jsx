import { useParams } from 'react-router-dom'
import { useGet } from '../hooks/useGet'
import { useContext, useEffect } from 'react'
import { Section } from '../components/Section/Section'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
import { ProductHeading } from '../components/ProductHeading/ProductHeading'
import { ProductDescription } from '../components/ProductDescription/ProductDescription'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { IngredientList } from '../components/IngredientList/IngredientList'
import { CommentInput } from '../components/CommentInput/CommentInput'
import { UserContext } from '../context/userContext'

export function ProductDetailsPage() {
  const { category, id } = useParams()

  const { userData } = useContext(UserContext)

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  )

  const comments = useGet(
    `https://api.mediehuset.net/bakeonline/comments/${id}`,
    userData?.access_token
  )

  console.log('Produkt', data)
  console.log('Comments', comments)

  useEffect(() => {
    document.title = `${data?.item.title}`
  }, [data])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <b>Error: {error?.message}</b>
  }

  return (
    <>
      <Section width='50%'>
        <Breadcrumb
          content={`produkter > ${category !== 'undefined' ? category : ''} > ${
            data?.item.title
          }`}
        />
        <ProductHeading
          productTitle={data?.item.title}
          productSubtitle={category !== 'undefined' ? category : ''}
        />
      </Section>
      <Section width='50%'>
        <GridContainer columns={2}>
          <ProductDescription
            textContent={data?.item.description}
            imgSrc={data?.item.image.fullpath}
          />

          {data && <IngredientList ingredients={data?.item.ingredients} />}
        </GridContainer>
        {userData ? (
          <CommentInput />
        ) : (
          <h4>Du skal være logget ind for at kommentere</h4>
        )}
      </Section>
    </>
  )
}
