import React, { useState } from 'react'
import { BiPhone, BiSend, BiUser } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focused, setFocused] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setIsSubmitting(false)
            alert('Successfully submitted')
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (err) {
            setIsSubmitting(false)
            alert('Submission failed')
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section
            className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            aria-labelledby="contact-heading"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2
                            id="contact-heading"
                            className="text-4xl font-bold text-gray-900 mb-4"
                        >
                            Let's get in touch!
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Got questions about GoGetWell.AI? Our team is here
                            to help. Contact us for quick and friendly support.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Contact Details */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <BiPhone
                                    className="w-6 h-6 text-primary"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600">Phone</p>
                                <a
                                    href="tel:+919811396858"
                                    className="text-gray-900 hover:text-primary transition-colors"
                                >
                                    +91 9811396858
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <CgMail
                                    className="w-6 h-6 text-primary"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600">Email</p>
                                <a
                                    href="mailto:hello@gogetwell.ai"
                                    className="text-gray-900 hover:text-primary transition-colors"
                                >
                                    hello@gogetwell.ai
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                to="https://x.com/gogetwellai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors"
                            >
                                <BsTwitter
                                    className="w-6 h-6 text-primary"
                                    aria-hidden="true"
                                />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/gogetwellai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors"
                            >
                                <BsLinkedin
                                    className="w-6 h-6 text-primary"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        noValidate
                    >
                        <div className="relative">
                            <div
                                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                    focused === 'fullname' || formState.fullname
                                        ? 'text-primary'
                                        : 'text-gray-400'
                                }`}
                            >
                                <BiUser
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                value={formState.fullname}
                                onChange={handleChange}
                                onFocus={() => setFocused('fullname')}
                                onBlur={() => setFocused('')}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                required
                                aria-required="true"
                                aria-label="Full Name"
                            />
                        </div>

                        <div className="relative">
                            <div
                                className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                    focused === 'email' || formState.email
                                        ? 'text-primary'
                                        : 'text-gray-400'
                                }`}
                            >
                                <CgMail
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formState.email}
                                onChange={handleChange}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused('')}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                required
                                aria-required="true"
                                aria-label="Email"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formState.message}
                                onChange={handleChange}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused('')}
                                rows={4}
                                className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                required
                                aria-required="true"
                                aria-label="Message"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                            aria-busy={isSubmitting}
                        >
                            <span>Submit</span>
                            <BiSend className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
