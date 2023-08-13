import React, { useEffect, useState } from "react";
import Button from "../../../../shared/ui/Button/Button";
import Modal from "../../../../shared/ui/Modal/Modal";
import Select, { Options } from "react-select";

import styles from "./MessagesFilter.module.css";
import { useSelector } from "react-redux";
import { messagesFiltersSelector } from "../../model/selectors";
import { useAppDispatch } from "../../../../app/store/store";
import { getMessagesFilters } from "../../model/thunks";
import { IMessageFilter } from "../../model/types";

interface IProps {
  filter: IMessageFilter;
  setFilter: (filter: IMessageFilter) => void;
}

const MessagesFilter: React.FC<IProps> = ({ setFilter }) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState<number>();
  const filters = useSelector(messagesFiltersSelector);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(getMessagesFilters());
  }, []);

  const apply = () => {
    if (!userId) return;
    closeModal();
    setFilter({ authorId: userId });
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Filter</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Filter">
        <div className={styles.content}>
          <div className={styles.form}>
            {filters?.map((el, i) => (
              <div key={i}>
                <div className={styles.label}>{el.label}</div>
                <Select
                  options={el.options}
                  onChange={(option) => setUserId(option?.value)}
                />
              </div>
            ))}
          </div>
          <div className={styles.controls}>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={apply}>Apply</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MessagesFilter;
