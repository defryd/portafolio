// src/presentation/components/ui/Layout.tsx
import { ThemeToggle } from '../components/ui/ThemeToggle';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
            <ThemeToggle />
            {children}
        </div>
    );
};
