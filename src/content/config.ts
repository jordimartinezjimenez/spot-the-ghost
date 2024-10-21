import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

const images = defineCollection({
    loader: cldAssetsLoader({
        limit: 12,
        folder: 'spot-the-ghost'
    })
})

export const collections = {
    images
}