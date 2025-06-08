"use client";
import { Fields, Product } from "@/Utilities/types";
import React from "react";
import Products from "./Products";

const ProductsSection = ({ data }: { data: Fields }) => {
  return (
    <section className="py-10 px-4 flex flex-col gap-5 backGround">
      <h2 className="text-3xl font-bold text-center text-white">
        {data?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.products &&
          data.products.map((product: Product, index: number) => (
            <Products product={product.fields} key={index} />
          ))}
      </div>
    </section>
  );
};

export default ProductsSection;
