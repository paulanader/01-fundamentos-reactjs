/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles?.comment}>
      <Avatar hasBorder={false} src="https://github.com/paulanader.png" />
      <div className={styles?.commentBox}>
        <div className={styles?.commentContent}>
          <header>
            <div className={styles?.authorAndTime}>
              <strong>Paula Nader</strong>
              <time
                title="29 de junho às 14:27h"
                dateTime="2023-06-29 14:27:00"
              >
                Cerca de 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
