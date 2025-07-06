import { useNavigate } from 'react-router-dom';
import type { Experience, Education, Certification, Project } from '../../types';

interface CardProps {
    key: string | number;
    item: Experience | Education | Certification | Project;
    sectionId: string;
}

export const Card = ({ item, sectionId }: CardProps) => {
    const navigate = useNavigate();

    switch (sectionId) {
        case 'certifications': {
            const { name, institution, date, url } = item as Certification;

            return (
                <div className='bg-[var(--color-soft)] p-4 rounded-md shadow-sm text-sm hover:shadow-md'>
                    <p className='text-[var(--color-primary)] font-semibold mb-1'>
                        {name}
                    </p>
                    <div className='flex flex-wrap justify-between gap-2'>
                        {institution && <p className='text-[var(--color-text)] font-semibold'>{institution}</p>}
                        {date && <p className='text-[var(--color-text-muted)]'>{date}</p>}
                        {url && (
                            <a href={url} className='text-blue-500 hover:underline'>
                                View
                            </a>
                        )}
                    </div>
                </div>
            );
        }

        case 'projects': {
            const { id, title, tech, img } = item as Project;
            return (
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/projects/${id}`)}
                    onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${id}`)}
                    className="bg-[var(--color-soft)] p-4 rounded-md shadow-sm text-sm hover:shadow-md hover:scale-[1.01] cursor-pointer focus:outline-none focus:ring-5 focus:bg-[var(--color-mix)]"
                >
                    <h3 className="text-[var(--color-primary)] text-lg font-semibold mb-1">{title}</h3>
                    {img && <img src={img} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />}
                    {tech && <p className="text-[var(--color-text)] mb-0.5">{tech}</p>}
                </div>
            );
        }

        case 'experience': {
            const { company, role, duration, description } = item as Experience;
            return (
                <div className="bg-[var(--color-soft)] p-3 rounded-md shadow-sm text-sm hover:shadow-md">
                    {company && <h3 className="text-[var(--color-primary)] text-lg font-semibold mb-1">{company}</h3>}
                    {role && <p className="text-[var(--color-text)] mb-0.5 font-semibold">{role}</p>}
                    {description && <p className="text-[var(--color-text-muted)] mb-1">{description}</p>}
                    {duration && <p className="text-[var(--color-text-secondary)] mb-0.5">{duration}</p>}
                </div>
            );
        }

        case 'education': {
            const { institution, degree, duration } = item as Education;
            return (
                <div className="bg-[var(--color-soft)] p-3 rounded-md shadow-sm text-sm hover:shadow-md">
                    {institution && <h3 className="text-[var(--color-primary)] text-lg font-semibold mb-1">{institution}</h3>}
                    {degree && <p className="text-[var(--color-text)] mb-0.5 font-semibold">{degree}</p>}
                    {duration && <p className="text-[var(--color-text-muted)] mb-0.5">{duration}</p>}

                </div>
            );
        }
    }
}