import React, { useState } from "react";
import MessagesList from "../../features/MessagesList/MessagesList";
import Template from "../../shared/ui/Template/Template";
import MessagesFilter from "./ui/MessagesFilter/MessagesFilter";
import NewMessage from "./ui/NewMessage/NewMessage";

import styles from "./Messages.module.css";
import { IMessageFilter } from "./model/types";

const Messages = () => {
  const [filter, setFilter] = useState<IMessageFilter>({} as IMessageFilter);

  return (
    <Template>
      <div className={styles.headline}>
        <NewMessage />
        <MessagesFilter
          filter={filter}
          setFilter={(filter) => {
            setFilter(filter);
          }}
        />
      </div>
      <MessagesList filter={filter} />
    </Template>
  );
};

export default Messages;
