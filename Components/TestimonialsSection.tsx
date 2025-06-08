import { Fields, Testimonial } from "@/Utilities/types";
import React from "react";

const TestimonialsSection = ({ data }: { data: Fields }) => (
  <section className="py-10 px-4 backGround flex flex-col gap-5">
    <h2 className="text-3xl font-bold text-center text-white">{data?.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data?.testimonials &&
        data?.testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="p-4 shadow-md rounded-lg bg-gray-50"
          >
            <p className="text-gray-700 italic">
              "{testimonial?.fields?.quote}"
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">
                {testimonial?.fields?.authorName}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonial?.fields?.authorTitlecompany}
              </p>
            </div>
          </div>
        ))}
    </div>
  </section>
);

export default TestimonialsSection;
