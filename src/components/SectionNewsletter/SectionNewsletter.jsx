import { InputField } from '../InputField/InputField'
import style from './SectionNewsletter.module.scss'
import { usePost } from '../../hooks/usePost'
import { useValidateEmail } from '../../hooks/useValidateEmail'

export function SectionNewsletter() {
  const { post, data } = usePost()
  const { testEmail } = useValidateEmail()

  const postNewsletter = (emailValue) => {
    const body = new URLSearchParams()
    body.append('email', emailValue)
    if (testEmail(emailValue)) {
      post(`https://api.mediehuset.net/bakeonline/newsletter`, {
        method: 'POST',
        body: body,
      })
    }
  }

  console.log('data', data)

  return (
    <section className={style.sectionNewsletter}>
      <div>
        <h4>Tilmeld dig nyhedsbrevet</h4>
        <p>
          Der er mange tilgængelige udgaver af lorem ipsum men denne er klart
          den bedste
        </p>
        <InputField
          type='email'
          placeholder='Skriv din email'
          name='newsletterEmail'
          id='newsletterInput'
          buttonText={'Tilmeld'}
          withIcon={true}
          onSubmitAction={postNewsletter}
        />
      </div>
    </section>
  )
}
