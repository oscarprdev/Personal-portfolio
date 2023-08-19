import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import styles from "./Lazy.module.css";
import { LocationContext } from "../../context/location.context.tsx";

interface LazyComponentWrapperProps {
  children: ReactNode;
  className: string;
  id: string;
}

function LazyComponentWrapper({
  children,
  className,
  id,
}: LazyComponentWrapperProps) {
  const { updateLocation } = useContext(LocationContext);

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            updateLocation(entry.target.id);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } as IntersectionObserverInit,
    );

    if (componentRef.current) {
      observer.observe(componentRef.current!);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current!);
      }
    };
  }, [updateLocation]);

  return (
    <section
      ref={componentRef}
      className={`${className} ${
        isVisible ? styles.visible : styles.notVisible
      }`}
      id={id}
    >
      {isVisible && children}
    </section>
  );
}

export default LazyComponentWrapper;
