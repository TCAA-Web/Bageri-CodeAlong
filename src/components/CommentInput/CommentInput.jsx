import { CommentHeading } from '../CommentHeading/CommentHeading'
import { InputField } from '../InputField/InputField'
import style from './CommentInput.module.scss'

export function CommentInput({ num_comments }) {
  return (
    <div className={style.commentInput}>
      <CommentHeading num_comments={num_comments} />
      <InputField
        buttonText={'Send'}
        withIcon={false}
        name='commentInput'
        id='commentInput'
        placeholder='Skriv kommentar'
      />
    </div>
  )
}
