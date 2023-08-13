import React, { useEffect, useRef, useState } from "react";

const OPTIONS: IntersectionObserverInit = {
  threshold: 0.01,
  rootMargin: "0px",
  root: null,
};

type IProps =
  | {
      skip?: boolean;
      options?: IntersectionObserverInit;
      onIntersect?: () => void;
    }
  | undefined;

export const useElementOnScreen = <T extends HTMLElement>({
  skip,
  options,
  onIntersect,
}: IProps = {}) => {
  const nodeRef = useRef<T>(null);
  const [isVisble, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      onIntersect?.();
    }
  };

  useEffect(() => {
    if (skip) return;
    const observer = new IntersectionObserver(callback, options ?? OPTIONS);
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, [nodeRef, skip, onIntersect]);

  return [nodeRef, isVisble] as const;
};
