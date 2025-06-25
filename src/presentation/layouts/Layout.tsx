// src/presentation/components/ui/Layout.tsx
import { ThemeToggle } from '../components/ui/ThemeToggle';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen">
            <ThemeToggle />
            {children}
        </div>
    );
};
