import { useState } from 'react';
import type { Experience, Education, Certification, Project } from '../../types';

interface ListProps {
    key: string | number;
    item: Experience | Education | Certification | Project;
    sectionId: string;
}

export const List = ({ item, sectionId }: ListProps) => {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    switch (sectionId) {
        case 'certifications': {
            const { institution, courses } = item as Certification;

            return (
                <div className='bg-[var(--color-soft)] rounded-md shadow-sm text-sm hover:shadow-md transition-all'>
                    <button
                        onClick={() => setOpen(!open)}
                        className='w-full text-left p-3 flex justify-between items-center'
                    >
                        <div className='flex flex-wrap gap-x-4 items-center'>
                            {institution && (
                                <p className='text-[var(--color-primary)] font-semibold mb-1'>
                                    {institution}
                                </p>
                            )}
                        </div>

                        <span
                            className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'
                                } text-[var(--color-text-muted)]`}
                        >
                            ▼
                        </span>
                    </button>
                    {open && courses && (
                        <div className='px-3 pb-3 text-[var(--color-text-muted)] text-sm mt-1'>
                            <ul className="list-disc list-inside space-y-2">
                                {courses.map((course, index) => (
                                    <div key={index} className='mb-2 flex justify-between items-center'>
                                        <p className='w-1/3 text-[var(--color-text)] font-semibold'>{course.name}</p>
                                        <p className='text-[var(--color-text-muted)] font-semibold'>{course.date}</p>
                                        <a href={course.url} className='text-[var(--color-secondary)] hover:underline font-semibold'>
                                            View
                                        </a>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            );
        }

        case 'experience': {
            const { company, role, duration, description } = item as Experience;
            return (
                <div className='bg-[var(--color-soft)] rounded-md shadow-sm text-sm hover:shadow-md transition-all'>
                    <button
                        onClick={() => setOpen(!open)}
                        className='w-full text-left p-3 flex justify-between items-center'
                    >
                        <div className='flex flex-wrap gap-x-4 items-center'>
                            {company && (
                                <h3 className='text-[var(--color-primary)] font-semibold text-lg mb-1'>
                                    {company}
                                </h3>
                            )}
                            {role && (
                                <p className='text-[var(--color-text)] mb-0.5 font-semibold'>
                                    {role}
                                </p>
                            )}
                            {duration && (
                                <p className='text-[var(--color-text-muted)] font-medium mb-0.5"'>
                                    {duration}
                                </p>
                            )}
                        </div>
                        <span
                            className={`transition-transform ${open ? 'rotate-180' : 'rotate-0'
                                } text-[var(--color-text-muted)]`}
                        >
                            ▼
                        </span>
                    </button>

                    {open && description && (
                        <div className='px-3 pb-3 text-[var(--color-text)] text-sm mt-1'>
                            {description}
                        </div>
                    )}
                </div>
            );
        }
    }
}