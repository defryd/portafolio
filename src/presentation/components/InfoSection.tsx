// // src/presentation/components/InfoSection.tsx
// import { useState } from 'react';
// // import InfoCard from './Card';
// import { Title } from './ui/Title';

// interface InfoSectionProps<T> {
//     id: string;
//     title: string;
//     items: T[];
//     getProps: (item: T) => Record<string, unknown>;
// }

// export function InfoSection<T>({ id, title, items, getProps }: InfoSectionProps<T>) {
//     const [showAll, setShowAll] = useState(false);

//     const getGridClass = (): string => {
//         switch (id) {
//             case 'education':
//                 return 'grid grid-cols-1 md:grid-cols-2 gap-4';
//             default:
//                 return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
//         }
//     };

//     const visibleItems = showAll ? items : items.slice(0, 6);
//     const hasMore = items.length > 6;

//     return (
//         <section id={id} className="scroll-mt-8 pt-6">
//             <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-4 transition-colors duration-500'>
//                 {title}
//             </Title>

//             <div className={getGridClass()}>
//                 {visibleItems.map((item, index) => (
//                     <Card key={index} {...getProps(item)} sectionId={id} />
//                 ))}
//             </div>

//             {hasMore && (
//                 <div className="mt-4 text-center">
//                     <button
//                         onClick={() => setShowAll(!showAll)}
//                         className="text-indigo-400 hover:underline font-medium transition-colors"
//                     >
//                         {showAll ? 'Ver menos...' : 'Ver más...'}
//                     </button>
//                 </div>
//             )}
//         </section>
//     );
// }
