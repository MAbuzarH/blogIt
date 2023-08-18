import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"
import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";



// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
// const token = process.env.SANITY_ACESS_TOKEN;
export const Client = createClient({
    apiVersion:'2023-07-11',
    dataset : "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACESS_TOKEN,
    useCdn:true
});
// export const congfig= {
//     projectId:"oi8pl770",
//     dataset:"production",
//     apiVersion:'2023-07-11',
//     token:"skwOmwsJHlN2OIGSVo4Lcajvxq29Ty4S5I71qOU1GGczHEVPE6VxW9ui84PeZMGajIVbEKXHzNmLVqeyhKZOv6YPAVXv92109HAxjouE30mNrnf9zAxoGdCQfSeJVicN3P89KFDMg0SJyxxIlkhj5BiZsdOAGWqJZs6Nvd4xemWRt7Li8Q9s",
//     useCdn:true,
// // }
// export const SanityClient  = createClient(congfig);
// export const urlFor = (source) => createImageUrlBuilder(Client).image(source)
