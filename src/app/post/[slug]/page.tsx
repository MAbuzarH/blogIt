import { RichTextCom } from "@/app/components/RichTextCom";
import { getSpecificBlogData } from "@/lib/mock";
import { PortableText, toPlainText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
// import {Post} from '../../../../typing'




export default async function Page({ params }: { params: { slug: string } }) {
 
 
  const data: Post[] = await getSpecificBlogData(params.slug);
  const reqdata: Post = data[0];

  function formatPublishedDate(publishedAt:Date) {
    try {
      const rawDate = new Date(publishedAt);
    
  
      return rawDate.toLocaleString("en-US",{
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        // timeZoneName: "short",
      } );
    } catch (error) {
      // Handle parsing errors here
      // console.error("Error parsing date:", error);
      return "Invalid Date";
    }
  }

  const formattedDate = formatPublishedDate(reqdata.publishedAt);

  // const[h1,blog] = reqdata.body;
  // console.log(data[0].body);
  // console.log(reqdata.author)

  
  return (
    <>
      {/* main image */}
      <div>
        <img
          src={`${reqdata?.mainImage}`}
          alt="cover-Image"
          className="w-full h-60 object-cover"
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
              blog post by{" "}
              <span className="font-bold text-seconderyColor ">
                {reqdata.author.name}
              </span>{" "}
              - Published at{" "}
              <span>
                {formattedDate}
              </span>{" "}
            </p>
          </div>
          <div className="m-10 flex flex-col">
            <PortableText value={reqdata?.body} components={RichTextCom} />
          </div>
        </article>
      </div>
    </>
  );
}
