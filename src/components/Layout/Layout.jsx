import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
