import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC<PropsWithChildren> = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.querySelector("#modal") as HTMLDivElement
  );
};

export default Portal;
