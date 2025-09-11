// FormSection.tsx

import { useRef, useState } from 'react';
import { Title } from './ui/Title';



export const FormSection = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const isValidForm = () => {
        return formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.message.trim() !== '';
    }

    const handleSubmit = () => {
        setTimeout(() => {
            formRef.current?.reset();
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 100);
    };

    return (
        <section id="contact" className="pt-6 bg-[var(--color-soft)] pb-10 mx-10 px-5 rounded-xl shadow-md">
            <Title as="h2" variant="h2" align="center" className='text-[var(--color-primary)] mb-6 font-semibold transition-colors duration-500'>

                Contact Me
            </Title>
            <p className='text-[var(--color-text)] text-center mb-6 font-semibold transition-colors duration-500'>

                No dudes en ponerte en contacto conmigo en mis redes sociales:
            </p>


            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/freddychiav" className="text-blue-500 font-semibold hover:underline">
                    LinkedIn
                </a>
                <a href="https://github.com/defryd" className="text-blue-500 font-semibold hover:underline">
                    GitHub
                </a>
                <a href="https://drive.google.com/file/d/1GHEMSHeNa-koyfmhB3bXaDtNIkwBVBSU/view?usp=sharing" className="text-blue-500 font-semibold hover:underline">
                    Currículum
                </a>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mvgayozr"
                method="POST"
                className="mt-6 max-w-md mx-auto">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 mb-4 placeholder-[var(--color-input-placeholder)] bg-[var(--color-input-form)] rounded-lg"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 mb-4 placeholder-[var(--color-input-placeholder)] bg-[var(--color-input-form)] rounded-lg"
                    required
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 placeholder-[var(--color-input-placeholder)] bg-[var(--color-input-form)] rounded-lg"
                    rows={4}
                    required
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <div className="flex justify-center">

                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className={`py-2 px-4 rounded-lg transition duration-300 
                ${isValidForm()
                                ? 'bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-mix)]'
                                : 'bg-gray-500 text-white cursor-not-allowed'}`}
                    >
                        Send Message
                    </button>
                </div>

            </form>
        </section>
    );
};
