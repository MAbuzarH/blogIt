import Image from "sanity";
export interface Post{
    _id: string;
    publishedAt: Date;
    title: string;
    author:{
        name: string;
        image:Image;
    };
    // comments:Comment[];
    description:string;
    mainImage:{
        asset:{
            url: string;
        };
    };
    slug:{
   current:string;
    };
    boday:[object];

}