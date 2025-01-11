import style from "./CommentCard.module.scss";

export function CommentCard({
  imgSrc,
  profileName,
  publishedDate,
  commentText,
}) {
  return (
    <article className={style.commentCard}>
      <img src={imgSrc} alt="profile-icon"></img>
      <div>
        <h5>{profileName}</h5>
        <p>{publishedDate}</p>
        <p>{commentText}</p>
      </div>
    </article>
  );
}
