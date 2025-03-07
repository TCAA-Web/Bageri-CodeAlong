import { IoMailOutline } from 'react-icons/io5'
import style from './InputField.module.scss'
import { useState } from 'react'

export function InputField({
  type,
  placeholder,
  name,
  id,
  labelText,
  onChangeAction,
  onSubmitAction,
  buttonText,
  withIcon,
}) {
  const onInputChange = (event) => {
    onChangeAction(event.target.value)
  }

  const onSubmit = (inputValue) => {
    onSubmitAction(inputValue, setStatusMessage)
    setInputValue('')
  }

  const [inputValue, setInputValue] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  return (
    <div className={style.styledInput}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      {statusMessage}
      <div>
        {withIcon && <IoMailOutline />}
        <input
          className={style.input}
          name={name}
          onChange={(event) =>
            onChangeAction
              ? onInputChange(event)
              : setInputValue(event.target.value)
          }
          id={id}
          type={type}
          placeholder={placeholder}
          value={inputValue}
        ></input>
        <button onClick={() => onSubmit(inputValue)}>{buttonText}</button>
      </div>
    </div>
  )
}
