// import data from "../../../data/data";

export const HomeScreen = () => {

    // const { techStack, experience, projects, education, certifications, Ids, MyPhoto } = data;

    return (
        <main>
            <div className="min-h-screen w-full p-4 space-y-10 overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300">
                <header className="text-center py-15 px-4 rounded-xl shadow-xl bg-[var(--color-soft)] dark:bg-[var(--color-soft)]">
                    <div className="h-50 md:h-30">
                        <h1 className="text-6xl font-extrabold mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-tertiary)]">
                            Hola
                            <span className="border-r-4 ml-1 animate-pulse border-[var(--color-accent)]">&nbsp;</span>
                        </h1>
                    </div>
                    <p className="text-xl text-center mx-auto">
                        Soy un desarrollador comprometido en la creación de aplicaciones funcionales y visualmente atractivas.
                    </p>
                </header>
            </div>
        </main>
    )
}
