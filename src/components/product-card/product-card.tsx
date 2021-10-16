import React from "react";
import { ProductType } from "../../types/types";

type Props = {
  product: ProductType;
};
export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="shadow-sm rounded-lg w-full h-full cursor-pointer m-auto rounded-xl overflow-hidden">
      <span className="w-full block h-full">
        <img
          alt="blog photo"
          src={
            "https://img5.lalafo.com/i/posters/original/82/c8/e8/a9826a8304879ad88be445a6b1.jpeg"
          }
          className="max-h-72 w-full object-cover object-center"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-3">
          {/*<p className="text-md font-medium">{product.title}</p>*/}
          <p className="text-md font-bold">25 000 сом</p>
          {/*<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">*/}
          {/*  Supercharged !*/}
          {/*</p>*/}
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {product.description}
          </p>
          <div className="flex items-center mt-4">
            <p className="block relative">
              <img
                alt="profil"
                src="https://www.tailwind-kit.com/images/person/6.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </p>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">Jean Jacques</p>
              <p className="text-gray-400 dark:text-gray-300">
                20 mars 2029 - 6 min read
              </p>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};
