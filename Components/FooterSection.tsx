import React from "react";

const FooterSection = ({ data }: { data: any }) => (
  <footer className="py-6 bg-gray-800 text-gray-200">
    <div className="text-center mb-4 text-sm md:text-base">
      <p>{data?.copyrightText}</p>
    </div>
    <div className="flex justify-center space-x-4">
      {data?.socialMediaLinks.map((link: any, index: number) => (
        <a
          key={index}
          href={link?.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https:${link?.fields?.icon?.fields?.file?.url}`}
            alt={link?.fields?.url}
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  </footer>
);

export default FooterSection;
