import data from "../../../data/data";

import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "../../components/Navbar";
import { Title } from "../../components/ui/Title";
import { InfoSection } from "../../components/InfoSection";
import { FormSection } from "../../components/FormSection";
import { useTheme } from "../../context/ThemeContext";

export const HomeScreen = () => {

    const { isDark } = useTheme();

    const {
        techStack,
        experience,
        projects,
        education,
        certifications,
        idSection,
        darkPhoto,
        lightPhoto } = data;

    return (
        <main>
            <div className="min-h-screen w-full p-4 space-y-10 overflow-x-hidden transition-colors duration-300">

                <Navbar sections={idSection} />

                <header className="text-center py-15 mt-6 px-4 rounded-xl 
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
                            Hi, I'm Freddy Chia <br />
                            <Typewriter words={[
                                " Systems Engineer",
                                " Full Stack Developer"]}
                                loop={false}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={1}
                            />
                            <span className="border-r-4 ml-1 animate-pulse border-[var(--color-accent)]">&nbsp;</span>
                        </h1>
                    </div>
                    {/* <p className="text-center mx-auto text-lg text-[var(--color-primary)] transition-colors duration-500">
                        Soy un desarrollador comprometido en la creación de aplicaciones funcionales y visualmente atractivas.
                    </p> */}
                </header>

                <section id='about' className='scroll-mt-8 pt-6'>
                    {/* <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-4 transition-colors duration-500'>
                        About Me
                    </Title> */}
                    <div className='flex flex-col md:flex-2 items-center gap-2 px-4'>
                        <img src={isDark ? darkPhoto : lightPhoto} alt="My Photo" className='w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-5' />
                        <p className="text-[var(--color-text)] text-lg text-center max-w-7xl">
                            Soy ingeniero de sistemas y Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones móviles y web, especializado en React Native y la integración de servicios en tiempo real mediante APIs REST y WebSockets. He trabajado con tecnologías como React, Go, PHP y Node.js, desarrollando arquitecturas modulares y sistemas escalables basados en microservicios. Me enfoco en crear soluciones eficientes y de alto rendimiento, aplicando buenas prácticas de código, optimización de performance y colaboración en equipos multidisciplinarios.
                        </p>
                    </div>
                </section>

                <section id='skills' className='scroll-mt-8 pt-6'>
                    <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] transition-colors duration-500 mb-4'>
                        Skills
                    </Title>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 md:mx-30">
                        <div>
                            <Title as="h3" variant="h4" align="left" className="text-[var(--color-primary)] transition-colors duration-500 mb-2">
                                Frontend
                            </Title>
                            <Title as="h4" variant="h4" align="left" className="mb-2">
                                - Frameworks/Librerías:
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.frontend.frameworks.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                            <Title as="h4" variant="h4" align="left" className="mb-2">
                                - State Management:
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.frontend.state.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                            <Title as="h4" variant="h4" align="left" className="mb-2">
                                - Estilos:
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.frontend.style.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <Title as="h3" variant="h4" align="left" className="text-[var(--color-primary)] transition-colors duration-500 mb-2">
                                Lenguajes de Programación
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.lenguajes.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                            <Title as="h3" variant="h4" align="left" className="text-[var(--color-primary)] transition-colors duration-500 mb-2">
                                Backend / Runtime
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.backend.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>

                            <Title as="h3" variant="h4" align="left" className="text-[var(--color-primary)] transition-colors duration-500 mb-2">
                                Bases de Datos
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.databases.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                            <Title as="h3" variant="h4" align="left" className="text-[var(--color-primary)] transition-colors duration-500 mb-2">
                                DevOps & Control de Versiones
                            </Title>
                            <div className="flex flex-wrap">
                                {techStack.tools.map((tech, index) => (
                                    <img className="h-7 m-1" key={index} src={tech.url} alt={tech.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <InfoSection
                    id='experience'
                    title='Experience'
                    items={experience}
                    type="list"
                />

                <InfoSection
                    id='projects'
                    title='Projects'
                    items={projects}
                    type="card"
                />

                <InfoSection
                    id='education'
                    title='Education'
                    items={education}
                    type="card"
                />

                <InfoSection
                    id='certifications'
                    title='Certifications'
                    items={certifications}
                    type="list"
                />

                <FormSection></FormSection>



                <footer className='text-center py-8 
                bg-gradient-to-b 
                from-[var(--color-background)] to-[var(--color-muted)]
                rounded-xl 
                shadow-xl'>
                    <p className='text-center 
                    text-[var(--color-primary)] 
                    transition-colors duration-500'>
                        © 2025 Freddy. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    )
}
