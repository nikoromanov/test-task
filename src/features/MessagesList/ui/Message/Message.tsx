import React from "react";
import cn from "classnames";

import { IMessage } from "../../../../pages/Messages/model/types";

import styles from "./Message.module.css";
import { MY_PROFILE } from "../../../../app/constants/constants";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

interface IProps extends IMessage {}

const Message: React.FC<IProps> = ({
  text,
  author,
  createdAt,
  isPending,
  isError,
}) => {
  const isMine = author.id === MY_PROFILE.id;

  const containerClassName = cn({
    [styles.container]: true,
    [styles.isMine]: isMine,
  });

  const msgClassName = cn({
    [styles.message]: true,
    [styles.pending]: isPending,
    [styles.error]: isError,
  });

  return (
    <article className={containerClassName}>
      <Link className={styles.avatar} to={`/users/${author.id}`}>
        <img className={styles.avatarImg} src={author.image} alt="avatar" />
      </Link>
      <div className={styles.msgWrapper}>
        <div className={styles.name}>{author.name}</div>
        <div className={msgClassName}>
          <div className={styles.text}>{text}</div>
          <time className={styles.time}>
            {dayjs(createdAt).format("YYYY-MM-DD HH:mm")}
          </time>
        </div>
      </div>
    </article>
  );
};

export default Message;
