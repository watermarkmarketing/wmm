import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        src={photo.src}
        alt={alt ?? photo.title ?? ""}
        sizes={sizes}
        fill
        className={`rounded-lg shadow-lg ${className || ""}`}
        onClick={onClick}
        priority={false}
      />
    </div>
  );
}
