import { Client } from "./Client";

export const getServersideProps = async (slug:any) => {
    const query = `*[_type=="post" && slug.current == '${slug}' ]{
      _id,
        title,
        author->{
          name,
          "image": image.asset->url,
        },  
        description,
          "mainImage": mainImage.asset->url,
        slug
    }`;
    const posts = await Client.fetch(query);
    return posts;
  };
  