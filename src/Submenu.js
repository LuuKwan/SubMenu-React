import React, { useState, useRef, useEffect } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const subMenuRef = useRef(null);
  const [columns, setColums] = useState(`col-2`);
  useEffect(() => {
    setColums(`col-2`);
    const { center, bottom } = location;
    const subMenu = subMenuRef.current;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColums(`col-3`);
    }
    if (links.length > 3) {
      setColums(`col-4`);
    }
  }, [location]);
  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : `submenu`}`}
      ref={subMenuRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((item, index) => {
          const { label, icon, url } = item;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
