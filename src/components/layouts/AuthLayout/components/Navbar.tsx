import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
    name: string
    path: string
}

interface NavbarProps {
    logo: string | React.ReactNode
    navItems: NavItem[]
    cta?: {
        text: string
        action: () => void
    }
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({
    logo,
    navItems,
    cta,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav
            className={`bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        {typeof logo === 'string' ? (
                            <span className="text-2xl font-bold text-indigo-600">
                                {logo}
                            </span>
                        ) : (
                            logo
                        )}
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-gray-600 hover:text-indigo-600 text-sm font-semibold transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        {cta && (
                            <button
                                onClick={cta.action}
                                className="ml-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-200"
                            >
                                {cta.text}
                            </button>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="block px-3 py-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-100 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {cta && (
                        <div className="mt-2">
                            <button
                                onClick={() => {
                                    cta.action()
                                    setIsOpen(false)
                                }}
                                className="w-full px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full"
                            >
                                {cta.text}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
