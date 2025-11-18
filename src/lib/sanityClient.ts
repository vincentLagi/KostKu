import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";


export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Ganti dengan Project ID kamu
  dataset: import.meta.env.VITE_SANITY_DATASET || "production", // Ganti dengan dataset kamu
  apiVersion: '2021-10-21', // Gunakan tanggal versi terbaru
  useCdn: true, // Cache data untuk fetch lebih cepat
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source);
