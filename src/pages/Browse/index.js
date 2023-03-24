import Layout from "../../components/Layout/Layout";
import React, { useState } from "react";

const BrowsePage = () => {
  const [count, setCount] = useState(0);
  // return (
  //   <Layout>
  //     <h1>krupali</h1>
  //   </Layout>
  // )
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default BrowsePage;
