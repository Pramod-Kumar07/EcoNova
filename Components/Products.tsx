import { Fields6, KeySpecification } from "@/Utilities/types";
import React, { useEffect, useState } from "react";

const Products = ({ product }: { product: Fields6 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % product?.productImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product?.productImages.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden group rounded-lg shadow-lg">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(https:${product?.productImages[currentIndex].fields.file.url})`,
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent text-white">
        <h2 className="text-2xl font-bold">{product?.title}</h2>
        <p className="mt-2 text-sm">{product?.description}</p>
      </div>

      <div className="absolute inset-0 bg-black/80 text-white p-6 flex flex-col items-start justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold">Specifications</h3>
        <div className="flex flex-col gap-2">
          {product?.keySpecifications.map(
            (spec: KeySpecification, index: number) => (
              <div key={index}>
                <p className="font-semibold">{spec.fields.name}</p>
                <p className="text-sm text-gray-300">{spec.fields.value}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
