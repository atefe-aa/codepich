import { useEffect, useRef } from "react";

function LazyBackground({ src, children, className }) {
  const backgroundRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backgroundRef.current.style.backgroundImage = `url('${src}')`;
          observer.unobserve(backgroundRef.current);
        }
      });
    });

    observer.observe(backgroundRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <section ref={backgroundRef} className={className}>
      {children}
    </section>
  );
}

export default LazyBackground;
