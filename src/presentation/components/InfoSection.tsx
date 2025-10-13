import { useState } from 'react';
import { Title } from './ui/Title';
import { Card } from './Card';
import type { Experience, Education, Certification, Project } from '../../types';
import { List } from './List';
interface InfoSectionProps {
    id: string;
    title: string;
    items: Experience[] | Education[] | Certification[] | Project[];
    type?: string
}

export const InfoSection = ({ id, title, items, type = 'card' }: InfoSectionProps) => {

    const [showAll, setShowAll] = useState(false);

    const getGridClass = () => {
        switch (id) {
            case 'education':
                return 'mx-10 grid grid-cols-1 md:grid-cols-2 gap-4';
            case 'experience':
                return 'mx-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4';
            default:
                return 'mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
        }
    };

    const visibleItems = showAll ? items : items.slice(0, 6);
    const hasMore = items.length > 6;

    const cardItems = () => {
        return (
            <>
                <div className={getGridClass()}>
                    {
                        visibleItems.map((item, index) => (
                            <Card key={index} item={item} sectionId={id} />
                        ))
                    }
                </div>
                {hasMore && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-blue-500 hover:underline font-medium transition-colors"
                        >
                            {showAll ? 'Ver menos...' : 'Ver más...'}
                        </button>
                    </div>
                )}
            </>
        );
    }

    const listItems = () => {
        return (
            <ul className="list-disc list-inside space-y-2 mx-10">
                {items.map((item, index) => (
                   <List key={index} item={item} sectionId={id} />
                ))}
                {/* {hasMore && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-blue-500 hover:underline font-medium transition-colors"
                        >
                            {showAll ? 'Ver menos...' : 'Ver más...'}
                        </button>
                    </div>
                )} */}
            </ul>
        );
    }

    return (
        <section id={id} className="scroll-mt-8 pt-6">
            <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-4 transition-colors duration-500'>
                {title}
            </Title>
            {type === 'card' ? cardItems() : listItems()}
        </section>
    )
}
