import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"
import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";



export const Client = createClient({
    apiVersion:'2023-07-11',
    dataset : "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACESS_TOKEN,
    useCdn:true
});
