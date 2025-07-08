import { useLocation } from "react-router-dom";
import type { Project } from "../../../types";
import { Title } from "../../components/ui/Title";
import { useState } from "react";

export const ProjectPage = () => {
    const { state } = useLocation();
    const { title, tech, description, link, imgs: images } = state?.item as Project;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!state?.item) {
        return <div className="text-center text-red-500">Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] p-5">
            <div className="p-6  max-w-4xl mx-auto">
                <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] font-bold mb-4 transition-colors duration-500'>
                    {title}
                </Title>

                <div className="h-[60vh] w-full relative flex justify-center items-center overflow-hidden rounded-md shadow-md mb-6 bg-gray-800">

                    <button
                        onClick={handlePrev}
                        className="absolute left-2 text-[var(--color-background-invr)] bg-[var(--color-background)] bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10 text-3xl"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`project-${currentIndex}`}
                        className="object-contain w-full max-h-[70vh] transition-all duration-500"
                    />

                    <button
                        onClick={handleNext}
                        className="absolute right-2 text-[var(--color-background-invr)] bg-[var(--color-background)] bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10 text-3xl"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2 mb-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-input-form)]'}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                <p className="mb-2">{tech}</p>
                <p className="mb-4">{description}</p>

                <a href={link} className="text-blue-500 font-medium  hover:underline">
                    View Project in GitHub
                </a>
            </div>
        </div>
    );
}
