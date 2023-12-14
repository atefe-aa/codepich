import { useState } from "react";
import Spinner from "./Spinner";

function LazyImage({ image, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <Spinner /> : null}
      <img
        className={className}
        onLoad={handleImageLoad}
        loading="lazy"
        src={image.src}
        alt={image.alt}
      />
    </>
  );
}

export default LazyImage;
