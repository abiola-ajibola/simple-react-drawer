import { PropsWithChildren, useRef } from "react";

import classnames from "./style.module.css";

export function Drawer({
  show,
  hide,
  children,
}: PropsWithChildren<{ show: boolean; hide: () => void }>) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
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
        show ? classnames.show_drawer : ""
      }`}
      ref={drawerRef}
    >
      <div ref={contentRef} className={`${classnames.drawer_container}`}>
        {children}
      </div>
    </div>
  );
}
