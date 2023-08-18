import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store/store";
import MessagesList from "../../features/MessagesList/MessagesList";
import Button from "../../shared/ui/Button/Button";
import { Spinner } from "../../shared/ui/Spinner/Spinner";
import Template from "../../shared/ui/Template/Template";
import {
  userDetailedIsLoadingSelecor,
  userDetailedSelecor,
} from "./model/selectors";
import { getUser } from "./model/thunks";

import styles from "./User.module.css";

const User = () => {
  const userId = +useParams().userId!;
  const dispatch = useAppDispatch();
  const user = useSelector(userDetailedSelecor)[userId!];
  const isLoading = useSelector(userDetailedIsLoadingSelecor)[userId!];

  useEffect(() => {
    if (!userId) return;
    dispatch(getUser(userId));
  }, [userId]);

  return (
    <Template>
      <nav className={styles.navbar}>
        <Link to="/">{"<"} Back</Link>
      </nav>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {!!user && (
        <>
          <main className={styles.container}>
            <section className={styles.photoBlock}>
              <h1 className={styles.name}>{user?.name}</h1>
              <div className={styles.avatarWrapper}>
                <img className={styles.avatar} alt="avatar" src={user?.image} />
              </div>
            </section>
            <section className={styles.infoBlock}>
              <div className={styles.label}>Birthdate:</div>
              <div className={styles.value}>{user?.birthdate}</div>
              <div className={styles.label}>Address:</div>
              <div className={styles.value}>{user?.address}</div>
              <div className={styles.label}>Gender:</div>
              <div className={styles.value}>{user?.gender}</div>
            </section>
            <section className={styles.descr}>
              <div className={styles.label}>Description:</div>
              <div className={styles.value}>{user?.description}</div>
            </section>
          </main>
          <MessagesList filter={{ authorId: userId }} />
        </>
      )}
      {!user && !isLoading && (
        <div className={styles.notFound}>User not found</div>
      )}
    </Template>
  );
};

export default User;
