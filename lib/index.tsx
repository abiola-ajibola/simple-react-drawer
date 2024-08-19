import { PropsWithChildren, useRef } from "react";

import classnames from "./style.module.css";

export function Drawer({
  show,
  hide,
  children,
  position = "right",
}: PropsWithChildren<{
  show: boolean;
  hide: () => void;
  position?: "left" | "right";
}>) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        onClick={(e) => {
          if (
            contentRef.current &&
            !contentRef.current.contains(e.target as Node)
          ) {
            hide();
          }
        }}
        className={`${classnames.drawer_overlay} ${
          show ? classnames.show_overlay : ""
        } rsd-overlay ${classnames[position]}`}
        ref={drawerRef}
      ></div>
      <div
        ref={contentRef}
        className={`${classnames.drawer_container} ${
          show ? classnames.show_drawer : ""
        } rsd-drawer ${classnames[position]}`}
      >
        {children}
      </div>
    </>
  );
}
