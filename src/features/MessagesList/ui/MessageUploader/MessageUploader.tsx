import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/store/store";
import {
  messagesCountSelector,
  messagesLoadingSelector,
  messagesPendingSelector,
  messagesSelector,
} from "../../../../pages/Messages/model/selectors";
import { getMessages } from "../../../../pages/Messages/model/thunks";
import { IMessageFilter } from "../../../../pages/Messages/model/types";
import { useElementOnScreen } from "../../../../shared/lib/hooks/useElementOnScreen";
import { generateStorageKey } from "../../../../shared/lib/utils/generateStorageKey";
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";

import styles from "./MessageUploader.module.css";

interface IProps {
  filter: Partial<IMessageFilter>;
}

const MessageUploader: React.FC<IProps> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const key = generateStorageKey(filter);
  const isLoading = useSelector(messagesLoadingSelector);
  const messages = useSelector(messagesSelector)[key];
  const allMessagesCount = useSelector(messagesCountSelector)[key];

  const onIntersect = useCallback(() => {
    if (isLoading) return;
    dispatch(getMessages(messages?.length ?? 0, filter));
  }, [messages, filter, isLoading, dispatch]);

  const [nodeRef, isVisible] = useElementOnScreen<HTMLDivElement>({
    onIntersect,
  });

  useEffect(() => {
    if (isLoading) return;
    if (!isVisible) return;
  }, [isVisible, isLoading]);

  const allMessagesLoaded =
    !!messages?.length && messages?.length === allMessagesCount;

  if (allMessagesLoaded) return null;

  return (
    <div ref={nodeRef} className={styles.container}>
      {isLoading && <Spinner isSmall isStatic />}
    </div>
  );
};

export default MessageUploader;
