import React from "react";
import { useSelector } from "react-redux";

import { messagesSelector } from "../../pages/Messages/model/selectors";
import Message from "./ui/Message/Message";
import MessageUploader from "./ui/MessageUploader/MessageUploader";
import { IMessageFilter } from "../../pages/Messages/model/types";
import { generateStorageKey } from "../../shared/lib/utils/generateStorageKey";

interface IProps {
  filter: Partial<IMessageFilter>;
}

const MessagesList: React.FC<IProps> = ({ filter }) => {
  const key = generateStorageKey(filter);
  const messages = useSelector(messagesSelector)[key];

  return (
    <div>
      {messages?.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
      <MessageUploader filter={filter} />
    </div>
  );
};

export default MessagesList;
