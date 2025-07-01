import data from "../../../data/data";

import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "../../components/Navbar";
import { Title } from "../../components/ui/Title";

export const HomeScreen = () => {

    const { techStack, 
        // experience, 
        // projects, 
        // education, 
        // certifications, 
        Ids, MyPhoto } = data;

    return (
        <main>
            <div className="min-h-screen w-full p-4 space-y-10 overflow-x-hidden transition-colors duration-300">

                <Navbar sections={Ids} />

                <header className="text-center py-15 mt-6 px-4 rounded-xl 
                shadow-lg
                bg-gradient-to-b
                from-[var(--color-muted)] to-[var(--color-background)]
                bg-[var(--color-soft)] "
                >
                    <div className="h-50 md:h-30">
                        <h1 className="text-6xl font-extrabold mb-6 pb-2 text-transparent bg-clip-text 
                        bg-gradient-to-r 
                        from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-tertiary)]
                        transition-colors duration-500"
                        >
                            <Typewriter words={["Hi, I'm Freddy Chia",
                                "Systems Engineer",
                                "Full Stack Developer"]}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={1}
                            />
                            <span className="border-r-4 ml-1 animate-pulse border-[var(--color-accent)]">&nbsp;</span>
                        </h1>
                    </div>
                    <p className="text-center mx-auto text-lg text-[var(--color-text)] transition-colors duration-500">
                        Soy un desarrollador comprometido en la creación de aplicaciones funcionales y visualmente atractivas.
                    </p>
                </header>

                <section id='about' className='scroll-mt-8 pt-6'>
                    <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-4 transition-colors duration-500'>
                        About Me
                    </Title>
                    <div className='flex flex-col md:flex-2 items-center gap-2 px-4'>
                        <img src={MyPhoto} alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-5' />
                        <p className="text-lg text-center max-w-7xl transition-colors duration-500">
                            Soy desarrollador Full Stack con una gran pasión por crear aplicaciones web dinámicas, atractivas y funcionales. Me gusta trabajar tanto en el Front-end como en el Back-end, y disfruto aprendiendo nuevas tecnologías que me permitan seguir mejorando día a día.
                        </p>
                    </div>
                </section>

                <section id='skills' className='scroll-mt-8 pt-6'>
                    <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-4 transition-colors duration-500'>
                        Skills
                    </Title>
                    <div className='flex flex-wrap gap-1 justify-center'>
                        {
                            techStack.map((tech, index) => (
                                <img className='h-7 m-1' key={index} src={tech.url} alt={tech.name} />
                            ))
                        }
                    </div>
                </section>

                <footer className='text-center py-8 
                bg-gradient-to-b 
                from-[var(--color-background)] to-[var(--color-muted)]
                rounded-xl 
                shadow-xl'>
                    <p className='text-center 
                    text--[var(--color-text)] 
                    transition-colors duration-500'>
                        © 2025 Freddy. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    )
}
