import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ siadbar, content, navbar }) => {
  const [menu, setMenu] = useState(false);
  const layoutBnt = () => {
    setMenu(!menu);
  };
  return (
    <div>
    
      <div className={menu ? "layout active" : "layout "}>
        <div className="btn layout_btn" onClick={layoutBnt}>
          X
        </div>
        <div className="saidbar">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          debitis.
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          quaerat illum praesentium quos architecto tempora natus libero fuga
          sed harum?
        </div>
      </div>
    </div>
  );
};

export default Layout;
