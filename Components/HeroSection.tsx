import { Fields } from "@/Utilities/types";

const HeroSection = ({ data, title }: { data: Fields; title: string }) => (
  <section
    className="bg-cover bg-center p-10 flex flex-col items-center justify-between h-screen"
    style={{
      backgroundImage: `url(https:${data?.backgroundImage?.fields?.file?.url})`,
    }}
  >
    <h1 className="lg:text-9xl md:text-8xl text-4xl bg-gradient-to-r from-green-700 via-green-500 to-green-700 bg-clip-text text-transparent font-bold">
      {title}
    </h1>
    <div className="w-full">
      <h1 className="text-3xl lg:text-5xl md:text-5xl text-shadow-green-700 text-green-700 font-bold">
        {data?.headline}
      </h1>
      <p className="text-lg text-gray-200 mt-4">{data?.subheadline}</p>
      <a href={data?.ctaButtonLink} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="mt-6 cursor-pointer bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 outline-0 ring-0 focus:outline-0 focus:ring-0"
        >
          {data?.ctaButtonText}
        </button>
      </a>
    </div>
  </section>
);

export default HeroSection;
