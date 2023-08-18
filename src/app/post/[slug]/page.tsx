import React from "react";
import { Footer, Header } from "../../components";
import { Client } from "@/lib/Client";
import { GetStaticPaths, GetStaticProps } from "next";

import { Post } from "../../../../typing";

interface Props{
  post:Post;
}
async function Posts({post}:Props) {
  // const data = await getStaticProps(post);

  return <div>post

    {/* <>{post.slug}</> */}
  </div>;
}

export default Posts;

export const getStaticPath = async () => {
  const query = `*[_type=="post"]{
    -id,
    slug{
      current,
    }
  }`;
  const posts = await Client.fetch(query);
  const path = await posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    path,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="post && slug.current == $slug " ][0]{
    -id,
    publishedAt,
    title,
    author ->{
      name,
      image,
    },
    description,
    mainImage,
    slug,
    boady,
  }`;
  const post = await Client.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
