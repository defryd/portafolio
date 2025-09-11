// src/presentation/components/ui/Text.tsx
import clsx from 'clsx';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

type Variant = 'h1' | 'h2' | 'h3' | 'h4';
type Align = 'left' | 'center' | 'right';

interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: HeadingLevel;
    variant?: Variant;
    align?: Align;
    className?: string;
    children: ReactNode;
}

const variants: Record<Variant, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
};

const alignments: Record<Align, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

export const Title = ({
    as = 'h2',
    variant = 'h2',
    align = 'left',
    className = '',
    children,
    ...props
}: TextProps) => {
    const Component = as as ElementType;

    return (
        <Component
            className={clsx(
                variants[variant],
                alignments[align],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
