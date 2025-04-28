import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'

type SideProps = CommonProps

import React, { useEffect, useRef } from 'react'
import HeroSection from './components/HeroSection'
import HomeFAQs from './components/HomeFAQ'
import ContactForm from './components/ContactForm'
import InfoSection from './components/InfoSection'
import FeaturesGrid from './components/FeaturesGrid'

const Side: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const FqRef = useRef<HTMLDivElement>(null)
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        let lastScrollTop = 0 // Initialize lastScrollTop variable

        const handleScroll = () => {
            const hcf = document.querySelector('.hcf-profile')
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop

            if (scrollTop > lastScrollTop) {
                if (hcf) {
                    hcf.classList.add('hcf-profile-fixed')
                }
            } else if (scrollTop < lastScrollTop) {
                if (hcf) {
                    hcf.classList.remove('hcf-profile-fixed')
                }
            }

            lastScrollTop = scrollTop
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div>
                <div className="bg-white">
                    <HeroSection
                        scrollToSection={scrollToSection}
                        featuresRef={FqRef}
                        contactRef={contactRef}
                        aboutRef={aboutRef}
                    />
                    <div className="bg-gray-50 relative">
                        <FeaturesGrid />
                    </div>
                    <div className="bg-white relative" ref={aboutRef}>
                        <InfoSection />
                    </div>
                    <div className="relative bg-white" ref={FqRef}>
                        <HomeFAQs />
                    </div>
                    <div className="bg-white relative" ref={contactRef}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

// const Side = ({ children, ...rest }: SideProps) => {
//     return (
//         <div className="flex h-full p-6 bg-white dark:bg-gray-800">
//             <div className=" flex flex-col justify-center items-center flex-1">
//                 <div className="w-full xl:max-w-[450px] px-8 max-w-[380px]">
//                     {children
//                         ? cloneElement(children as React.ReactElement, {
//                               ...rest,
//                           })
//                         : null}
//                 </div>
//             </div>
//             <div className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative xl:max-w-[520px] 2xl:max-w-[720px]">
//                 <img
//                     src="/img/others/auth-side-bg.png"
//                     className="absolute h-full w-full top-0 left-0 rounded-3xl"
//                 />
//             </div>
//         </div>
//     )
// }

export default Side
