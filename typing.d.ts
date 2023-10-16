interface Span {
    _type: "span";
    marks: any[];
    text: string;
    _key: string;
  }
  
  interface Block {
    _type: "block";
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquotes";
    _key: string;
    markDefs: any[];
    children: (Span | Block)[];
  }
  
  interface IImage {
    _type: "image";
    alt: string;
    _key: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  
  interface Link {
    _type: "link";
    href: string;
    _key: string;
    children: Span[];
  }
  
  interface Post {
    _id: string;
    publishedAt: Date;
    title: string;
    author: {
      name: string;
      image: Image;
    };
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: (Block | IImage | Link)[];
  }
  