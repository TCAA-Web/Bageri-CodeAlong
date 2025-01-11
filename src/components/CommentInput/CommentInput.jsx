import style from "./CommentInput.module.scss";

export function CommentInput({ num_comments }) {
  return (
    <div className={style.commentInput}>
      <div>
        <p>kommenter</p>
        <p>{num_comments}</p>
      </div>

      <div>
        <p>ICON</p>
        <input></input>
        <button>indsæt</button>
      </div>
    </div>
  );
}
