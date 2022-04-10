import styles from "@styles/atoms/FakeCursor.module.scss";
import { useEffect, useRef } from "react";

const FakeCursor = (): JSX.Element => {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursor.current) {
        const mouseY = e.offsetY;
        const mouseX = e.offsetX;
        const element = e.target as HTMLElement;
        cursor.current.style.display = "block";
        if (mouseX && mouseY) {
          if (parentHasClass("clickable", element)) {
            cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(4)`;
          } else {
            cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
          }
        }
      }
    };
    const removeCursor = () => {
      if (cursor.current) {
        cursor.current.style.display = "none";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", removeCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", removeCursor);
    };
  }, [cursor]);
  return <div className={styles.cursor} ref={cursor}></div>;
};

function parentHasClass(className: string, element: HTMLElement): boolean {
  if (element.classList.contains(className)) return true;
  return (
    (element.parentElement &&
      parentHasClass(className, element.parentElement)) ||
    false
  );
}

export default FakeCursor;
