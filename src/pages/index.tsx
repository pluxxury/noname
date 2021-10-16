import React from "react";
import { useFirebase } from "../hooks/useFirebase";
import { ProductCard } from "../components/product-card/product-card";
import { ProductType } from "../types/types";

const Main: React.FC = () => {
  const data = useFirebase("products");
  return (
    <>
      <div className="grid grid-cols-4 gap-8 items-baseline">
        {data?.map((product: ProductType, index: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Main;
