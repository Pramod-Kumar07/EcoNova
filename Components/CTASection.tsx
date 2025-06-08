import { Fields } from "@/Utilities/types";
import React from "react";

const CTASection = ({ data }: { data: Fields }) => {
  return (
    <section className="py-10 px-4 backGround text-center">
      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {data?.headline}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-3">
          {data?.description}
        </p>
        <a
          href={data?.ctaButtonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-fit bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
        >
          {data?.ctaButtonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
