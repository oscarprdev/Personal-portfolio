import {ReactNode, useEffect, useRef, useState} from "react";

interface LazyComponentWrapperProps {
    children: ReactNode;
    className: string;
    id: string;
}

function LazyComponentWrapper({ children, className, id }: LazyComponentWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 } as IntersectionObserverInit
        );

        if (componentRef.current) {
            observer.observe(componentRef.current!);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current!);
            }
        };
    }, []);

    return (
        <section ref={componentRef} className={className} id={id}>
            {isVisible && children}
        </section>
    );
}

export default LazyComponentWrapper;