
import Image from "next/image";
import React from "react";
import urlBuilder from '@sanity/image-url'
import { urlForImage } from "../../../sanity/lib/image";
// import { SanityImage } from './SanityImage'


export const RichTextCom = {
    
    types: {
      image: ({ value }: any) => {
      const urlForImg = urlForImage(value).url();
        return (
          <div>
            <img src={urlForImg} alt="Blog Post Image"  />
          </div>
        );
      },
        callToAction: ({value, isInline}:any) =>
        isInline ? (
          <a className="text-blue-800" href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
        
    },
    list: {
      bullet: ({ children }: any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
      number: ({ children }: any) => <ol className="mt-lg list-decimal">{children}</ol>,
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-5xl py-10 font-bold">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-4xl py-10 font-bold">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-3xl py-10 font-bold">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-2xl py-10 font-bold">{children}</h4>,
      p: ({ children }: any) => <p className="text-xl py-10 font-base">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="text-4xl py-5 pl-5 my-5 border-l-4 ">{children}</blockquote>
      ),
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a className="text-blue-900" href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  }
  
