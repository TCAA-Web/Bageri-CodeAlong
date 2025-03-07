export const useValidateEmail = () => {
  const regExp = new RegExp(
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
  )

  const testEmail = (emailValue) => {
    if (regExp.test(emailValue)) {
      return true
    } else return false
  }

  return { testEmail }
}
