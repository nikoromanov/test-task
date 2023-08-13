import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { MAX_MSG_LENGTH } from "../../../../app/constants/constants";
import { useAppDispatch } from "../../../../app/store/store";
import Button from "../../../../shared/ui/Button/Button";
import Modal from "../../../../shared/ui/Modal/Modal";
import { messagesPendingSelector } from "../../model/selectors";
import { sendMessage } from "../../model/thunks";

import styles from "./NewMessage.module.css";

const NewMessage = () => {
  const dispatch = useAppDispatch();
  const isPending = useSelector(messagesPendingSelector);

  const [isModal, setIsModal] = useState(false);

  const [msg, setMsg] = useState("");

  const msgTooLong = msg.length > MAX_MSG_LENGTH;

  const progressPercents = Math.round(msg.length / (MAX_MSG_LENGTH / 100));

  const closeModal = () => setIsModal(false);

  const submitMessage = () => {
    closeModal();
    dispatch(sendMessage(msg));
    setMsg("");
  };

  return (
    <>
      <Button disabled={isPending} onClick={() => setIsModal(true)}>
        New Message
      </Button>
      <Modal isOpen={isModal} onClose={closeModal} title="New Message">
        <div className={styles.content}>
          <TextareaAutosize
            className={styles.input}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="type here"
            minRows={5}
            maxRows={10}
          />
          <div className={styles.progressWrapper}>
            <div
              className={classNames(styles.progress, {
                [styles.progressError]: msgTooLong,
              })}
              style={{ width: `${progressPercents}%` }}
            />
          </div>
          {msgTooLong && (
            <div className={styles.errMsg}>
              Message length must be less than 200 characters
            </div>
          )}
          <div className={styles.controls}>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              disabled={!msg || msgTooLong || isPending}
              onClick={submitMessage}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewMessage;
