import React from "react";
import { useFirebase } from "../hooks/useFirebase";

const Main: React.FC = () => {
  const data = useFirebase("products");
  return (
    <>
      {data?.map((product: any) => (
        <p>{product.title}</p>
      ))}
    </>
  );
};

export default Main;
