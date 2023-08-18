import Image from "next/image";
import { Banner, BannerBottom } from "./components";
import { Client } from "@/lib/Client";
import { Post } from "../../typing";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { Image as sanityImage } from "sanity";

const builder = imageUrlBuilder(Client);
function urlFor(source: sanityImage) {
  return builder.image(source);
}

export default async function Home() {
  const data: Post[] = await getServersideProps();
  // console.log(data);
  return (
    <main className="min-h-[1500px]">
      <Banner />
      <div
        className="max-w-7xl mx-auto h-60 relative 
      w-[90%] "
      >
        <BannerBottom />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6  py-6 px-4 ">
        {data?.map((post) => (
          <Link
            key={post._id}
            className="w-100 cursor-pointer"
            href={`/post/${post.slug.current}`}
         
          >
              
            <div className="border-[1px] border-seconderyColor border-opacity-40  h-[450px] group">
              <div className="h-3/5 w-full overflow-hidden">
                <Image
                  width={380}
                  height={350}
                  alt="post img"
                  src={`${urlFor(post.mainImage.asset)}`}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                />
              </div>
              <div className="h-2/5 w-full flex flex-col justify-center">
                <div className="flex  justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500 ">
                  <p className="">{post.title}</p>
                  <img
                    className="w-12 h-12 rounded-full object-cover "
                    src={`${urlFor(post.author.image)}`}
                    alt=""
                  />
                </div>

                <h1 className="px-2 py-4 text-base">
                  {post.description.substring(0, 60)}... by -
                  <span className="font-semibold ">{post.author.name}</span>
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
export const getServersideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
      title,
      author->{
        name,
        image
      },
      description,
      mainImage,
      slug
  }`;
  const posts = await Client.fetch(query);
  return posts;
};
