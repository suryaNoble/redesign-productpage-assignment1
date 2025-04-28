import React from 'react'
import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

const solutions = [
    {
        icon: <BiGlobeAlt aria-hidden="true" />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-600',
    },
    {
        icon: <FaUserSecret aria-hidden="true" />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-600',
    },
    {
        icon: <BiMessageSquare aria-hidden="true" />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-600',
    },
    {
        icon: <FiFileText aria-hidden="true" />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-600',
    },
    {
        icon: <BiTrendingUp aria-hidden="true" />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-600',
    },
    {
        icon: <BsDatabase aria-hidden="true" />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-600',
    },
    {
        icon: <LuLanguages aria-hidden="true" />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-600',
    },
    {
        icon: <BiCreditCard aria-hidden="true" />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-600',
    },
    {
        icon: <BiSearch aria-hidden="true" />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-600',
    },
]

const FeaturesGrid: React.FC = () => {
    return (
        <section
            aria-labelledby="features-heading"
            className="py-16 px-4 md:px-8 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        id="features-heading"
                        className="text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Our Comprehensive Solutions
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((solution, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary"
                            tabIndex={0}
                        >
                            <div className="p-6">
                                <div
                                    className={`${solution.color} inline-flex p-3 rounded-lg text-white mb-4`}
                                    aria-hidden="true"
                                >
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                            <div
                                className={`h-1 w-full absolute bottom-0 ${solution.color} opacity-75`}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesGrid
