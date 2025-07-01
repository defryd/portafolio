import React from 'react'
import { Menu } from 'lucide-react';


interface NavbarProps {
    sections: string[];
}

export const Navbar = ({ sections }: NavbarProps) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-[var(--color-background)]">
            <div className="flex justify-end items-center px-6 py-1 md:px-8">

                <button
                    onClick={toggleMenu}
                    className="text-matrix-green text-3xl md:hidden"
                    aria-label="Toggle menu"
                >

                        <Menu className="w-7 h-7 text-[var(--color-primary)]" />
                </button>

                <ul className="hidden md:flex space-x-6">
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="text-[var(--color-primary)] capitalize font-bold
                                transition-colors duration-500
                                hover:text-red-600"
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <ul className="flex flex-col md:hidden bg-[var(--color-background)] px-6 pb-4 space-y-4">
                    {sections.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="block text-[var(--color-primary)] capitalize 
                                transition-colors duration-500 
                                hover:text-red-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};
