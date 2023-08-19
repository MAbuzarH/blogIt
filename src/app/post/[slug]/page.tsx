import { getSpecificBlogData } from "@/lib/mock";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getSpecificBlogData(params.slug);
  const reqdata = data[0];
  // console.log("data", data[0]);
  return (
    <>
      {/* main image */}
      <div>
        <img
          src={`${reqdata.mainImage}`}
          alt="cover-Image"
          className="w-full h-98 object-cover"
        />
      </div>
      {/* artical */}
      <div className="max-w-3xl mx-auto ">
        <article className="w-full mx-auto p-5 bg-seconderyColor/10">
          <h1 className="font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3 ">
            {reqdata.title}
          </h1>
          <h2
            className="text-[18px] mb-2 text-gray-500
          "
          >
            {reqdata.description}
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={`${reqdata.author.image}`}
              alt="author-image"
              className="rounded-full w-12 h-12 object-cover bg-red-400"
            />
            <p className="text-base">
              blog post by <span className="font-bold text-seconderyColor ">{reqdata.author.name}</span> - Published at{" "}
              <span >
                {new Date(reqdata.PublishedAt).toLocaleString()}
              </span>{" "}
            </p>
          </div>
          <div className="m-10">
          <PortableText
  content={reqdata.body}
  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jjjj" }
  dataset={process.env.SANITY_DATASET || 'production'}
/>
          </div>
        </article>
      </div>
    </>
  );
}
