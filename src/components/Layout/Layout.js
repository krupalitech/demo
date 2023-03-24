import React from "react";
import Header from "./Header";
const layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div>
        {children}
    </div>
    </>
  );
};

export default layout;
