import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
    featuresRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
}

const slides = [
    {
        title: 'AI Front Office for Healthcare Agents',
        subtitle: 'Create AI Store in 2 min. Scale with Digital Marketing.',
        image: '/images/carous1.webp',
        bgColor: 'bg-blue-700',
    },
    {
        title: 'Streamline Patient Interactions',
        subtitle: 'Handle appointments, queries, and follow-ups seamlessly.',
        image: '/images/carous2.webp',
        bgColor: 'bg-indigo-700',
    },
    {
        title: 'Grow Your Medical Practice',
        subtitle: 'Boost visibility and attract new patients with ease.',
        image: '/images/carous3.webp',
        bgColor: 'bg-purple-700',
    },
]

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className={`w-full relative flex flex-col pb-8 md:pb-16 pt-0 overflow-hidden ${slides[currentSlide].bgColor}`}
        >
            {/* <div className="w-full bg-blue-800 text-white p-4 text-center font-semibold"> */}
            <div>
                <Navbar
                    logo="Our logo"
                    navItems={[
                        { name: 'Home', path: '/' },
                        { name: 'Features', path: '/features' },
                        { name: 'About', path: '/about' },
                        { name: 'FAQ', path: '/faq' },
                        { name: 'Contact us', path: '/contact-us' },
                    ]}
                    cta={{
                        text: 'Sign Up',
                        action: () => console.log('Sign up clicked'),
                    }}
                />
            </div>

            <div className="min-h-[90vh] flex items-center relative px-4 max-w-7xl mx-auto">
                <div className="absolute top-0 left-0 w-full h-full opacity-70 -z-10"></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                    <div className="lg:w-5/12 h-64 md:h-96 flex items-center justify-center">
                        <img
                            src={slides[currentSlide].image}
                            alt="Slide"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 capitalize">
                            <span className="text-yellow-400">
                                {slides[currentSlide].title.split(' ')[0]}{' '}
                            </span>
                            {slides[currentSlide].title.substring(
                                slides[currentSlide].title.indexOf(' ') + 1,
                            )}
                        </h1>

                        <p className="text-lg mb-8 font-light leading-relaxed">
                            {slides[currentSlide].subtitle}
                        </p>

                        <button
                            type="button"
                            className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition"
                        >
                            Get Started
                        </button>

                        {/* Static Stats Section */}
                        <div className="flex gap-12 mt-10 flex-wrap text-white">
                            <div>
                                <h2 className="text-4xl font-extrabold">
                                    2100
                                    <span className="text-yellow-400 ml-1">
                                        +
                                    </span>
                                </h2>
                                <p className="text-lg capitalize">
                                    qualified doctors
                                </p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-extrabold">
                                    1000
                                    <span className="text-yellow-400 ml-1">
                                        +
                                    </span>
                                </h2>
                                <p className="text-lg capitalize">hospitals</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-extrabold">
                                    800
                                    <span className="text-yellow-400 ml-1">
                                        +
                                    </span>
                                </h2>
                                <p className="text-lg capitalize">
                                    Treatment Plans
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
