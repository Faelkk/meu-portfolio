import { useState } from "react";

interface ImageSkeletonProps {
  className: string;
  src: string;
  alt: string;
}

const ImageSkeleton = ({ src, alt, className }: ImageSkeletonProps) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }: React.SyntheticEvent<HTMLImageElement>) {
    setSkeleton(false);
    if (target instanceof HTMLImageElement) {
      target.style.opacity = "1";
    }
  }

  return (
    <div className="grid">
      {skeleton && (
        <div
      className="
  skeleton 
  h-full 
  size
  animate-pulse 
  transition
  bg-linear-to-r 
  from-gray-300 
  via-white 
  to-gray-300
  dark:from-woodsmoke-800
  dark:via-woodsmoke-800
  dark:to-woodsmoke-800
"

          style={{ backgroundSize: "200%", gridArea: "1/1" }}
        ></div>
      )}

      <img
        src={src}
        onLoad={handleLoad}
        className={className}
        style={{ gridArea: "1/1" }}
        alt={alt}
      />
    </div>
  );
};

export default ImageSkeleton;
