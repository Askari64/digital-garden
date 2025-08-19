import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface BlogImage {
  asset?: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface BlogImagesProps {
  images: BlogImage[];
}

export default function BlogImages({ images }: BlogImagesProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="blog-images mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {images.map((img, idx) => {
        const imageUrl = urlForImage(img)?.width(600).height(400).url();
        return imageUrl ? (
          <div key={idx} className="overflow-hidden rounded-md shadow-sm">
            <Image
              src={imageUrl}
              alt={img.alt || `Blog image ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div key={idx} className="bg-slate-50" style={{ paddingTop: "66.66%" }} />
        );
      })}
    </section>
  );
}
