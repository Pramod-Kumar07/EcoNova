import { Feature, Fields } from "@/Utilities/types";
import React from "react";

const FeaturesSection = ({ data }: { data: Fields }) => (
  <section className="py-10 px-4 backGround flex flex-col gap-5">
    <h2 className="text-3xl font-bold text-center text-white">{data?.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data?.features &&
        data?.features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg group cursor-pointer"
          >
            {feature?.fields?.icon && (
              <img
                src={`https:${feature?.fields?.icon?.fields?.file?.url}`}
                alt={feature?.fields?.title}
                className="w-16 h-16 mx-auto rounded-2xl transform transition-transform duration-300 ease-in-out group-hover:scale-120"
              />
            )}
            <h3 className="md:text-xl text-lg font-semibold text-center mt-4 transform transition-transform duration-300 ease-in-out group-hover:scale-120">
              {feature?.fields?.title}
            </h3>
            <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
              {feature?.fields?.description}
            </p>
          </div>
        ))}
    </div>
  </section>
);

export default FeaturesSection;
