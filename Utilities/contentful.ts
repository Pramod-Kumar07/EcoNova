import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getLandingPageData = async () => {
  const res = await client.getEntries({
    content_type: "landingPage",
    include: 3,
  });
  return res.items[0];
};
