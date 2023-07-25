/* eslint-disable react/prop-types */
import moment from "moment";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const handleNewCommentChange = (event) => {
    console.log({ event: event.target.value });
    setNewCommentText(event.target.value);
  };
  console.log({ newCommentText });
  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const deleteComment = (commentToDelete) => {
    const newComments = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(newComments);
  };

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const isNewCommentInputEmpty = newCommentText.length === 0;

  return (
    <article className={styles?.post}>
      <header>
        <div className={styles?.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles?.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="29 de junho às 14:27h" dateTime="2023-06-29 14:27:00">
          {moment.utc(publishedAt).format("DD-MM-YYYY")}
        </time>
      </header>

      <div className={styles?.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content} </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles?.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles?.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
