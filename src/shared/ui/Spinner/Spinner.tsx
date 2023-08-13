import React from "react";
import cn from "classnames";

import styles from "./Spinner.module.css";

interface ISpinnerProps {
  isFixed?: boolean;
  isStatic?: boolean;
  isSmall?: boolean;
  isSmallGray?: boolean;
  className?: string;
  isFullHeight?: boolean;
}

export const Spinner = React.memo(
  ({
    isFixed,
    className,
    isSmall,
    isSmallGray,
    isStatic,
    isFullHeight,
  }: ISpinnerProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [offset, setOffset] = React.useState<number | null>(null);

    React.useEffect(() => {
      if (!containerRef.current || !isFullHeight) return;
      setOffset(containerRef.current.getBoundingClientRect().top);
    }, [isFullHeight]);

    return (
      <div
        className={cn(styles.container, "spinnerGlobal", className, {
          [styles.fixed]: isFixed,
          [styles.static]: isStatic,
        })}
        style={
          isFullHeight ? { height: `calc(100vh - ${offset}px - 2.2rem)` } : {}
        }
      >
        {isSmallGray ? (
          <div className={styles.smallGray} />
        ) : (
          <div className={cn(styles.spinner, { [styles.small]: isSmall })} />
        )}
      </div>
    );
  }
);
