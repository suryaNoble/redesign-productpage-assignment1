import React from 'react'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
    featuresRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="bg-blue-900 w-full relative flex flex-col py-8 md:py-16 overflow-hidden">
            {/* Placeholder for HomeNavbar - replace with actual HomeNavbar component */}
            <div className="w-full bg-blue-800 text-white p-4 text-center font-semibold">
                Navigation Bar Placeholder
            </div>

            <div className="min-h-[90vh] flex items-center relative px-4 max-w-7xl mx-auto">
                {/* Placeholder background image */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-70 -z-10"
                    aria-hidden="true"
                ></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                    {/* Placeholder for video or image section */}
                    <div className="lg:w-5/12 h-64 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                        Image/Video Placeholder
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 capitalize">
                            <span className="text-yellow-400">
                                AI front office{' '}
                            </span>{' '}
                            <br />
                            for healthcare agents
                        </h1>
                        <p className="text-lg mb-8 font-light leading-relaxed">
                            Create{' '}
                            <span className="text-yellow-400 font-semibold">
                                AI Store
                            </span>{' '}
                            in 2 min <br />
                            Scale with{' '}
                            <span className="font-semibold text-yellow-400">
                                Digital Marketing
                            </span>
                        </p>
                        {/* Placeholder for HcfSignupPopup with Button */}
                        <button
                            type="button"
                            className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition"
                        >
                            Get Started
                        </button>

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
