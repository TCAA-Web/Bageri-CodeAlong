export const postNewsletter = (emailValue, setStatusMessage) => {
  const regExp = new RegExp(
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
  )

  // Tage imod en email
  console.log(emailValue)

  // Valider email
  if (regExp.test(emailValue)) {
    // Create body med email value
    const body = new URLSearchParams()
    body.append('email', emailValue)

    // Create options til fetch
    const options = {
      method: 'POST',
      body: body,
    }

    fetch('https://api.mediehuset.net/bakeonline/newsletter', options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Ok') {
          setStatusMessage('Du er nu tilmeldt nyhedsbrevet')
        } else {
          setStatusMessage('Du er allerede tilmeldt')
        }
      })
      .catch((error) => console.error('Failed to post newsletter: ', error))
  }
}
