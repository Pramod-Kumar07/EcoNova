import CTASection from "@/Components/CTASection";
import FeaturesSection from "@/Components/FeaturesSection";
import FooterSection from "@/Components/FooterSection";
import HeroSection from "@/Components/HeroSection";
import ProductsSection from "@/Components/ProductsSection";
import TestimonialsSection from "@/Components/TestimonialsSection";
import { getLandingPageData } from "@/Utilities/contentful";
import { LandingPageInterface, Section } from "@/Utilities/types";

const LandingPage = async () => {
  const landingPage = await getLandingPageData();

  if (!landingPage) return <div>No data available.</div>;

  const { fields }: LandingPageInterface | any = landingPage;
  console.log("fields", fields);

  return (
    <div className="bg-gray-800 flex flex-col">
      {fields.sections.map((section: Section, index: number) => {
        const sectionType = section.sys.contentType.sys.id;

        switch (sectionType) {
          case "heroSection":
            return (
              <HeroSection
                key={index}
                data={section.fields}
                title={fields.title}
              />
            );
          case "featuresSection":
            return <FeaturesSection key={index} data={section.fields} />;
          case "testimonialsSection":
            return <TestimonialsSection key={index} data={section.fields} />;
          case "productShowcaseSection":
            return <ProductsSection key={index} data={section.fields} />;
          case "ctaSection":
            return <CTASection key={index} data={section.fields} />;
          case "footerSection":
            return <FooterSection key={index} data={section.fields} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default LandingPage;
