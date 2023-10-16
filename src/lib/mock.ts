import { Client } from "./Client";

export const getSpecificBlogData = async (slug:any) => {
    const query = `*[_type=="post" && slug.current == '${slug}' ]{
      _id,
        title,
        author->{
          name,
          "image": image.asset->url,
        }, 
        publishedAt, 
        description,
          "mainImage": mainImage.asset->url,
        slug,
        body,
    }`;
    const posts = await Client.fetch(query);
    return posts;
  };

  export const getBlogData = async () => {
    const query = `*[_type=="post"]{
      _id,
        title,
        author->{
          name,
          "image": image.asset->url,
        },
        publishedAt,
        description,
        "mainImage": mainImage.asset->url,
        slug
    }`;
    const posts = await Client.fetch(query);
    return posts;
  };
  
  