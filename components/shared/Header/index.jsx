'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { APP_NAME } from '@/lib/constants'
import Menu from './Menu'
import { Progress } from '@/components/ui/progress'

function Header() {

    const [progress, setProgress] = React.useState(0)

    function scrollProgressBar() {
        let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollDistance = window.scrollY || window.pageYOffset;
        let progressPercentage = (scrollDistance / totalHeight) * 100;
        let val = Math.floor(progressPercentage);
        setProgress(val);
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollProgressBar);
        return () => {
            window.removeEventListener('scroll', scrollProgressBar);
        }
    })

    return (
        <div className="w-full border-b sticky top-0 z-50 backdrop-blur-md">
            <div className="lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center">
                        <Link href="/">
                            <div className="flex justify-start items-center">
                                <Image
                                    src="/images/logo.svg"
                                    alt={`${APP_NAME} logo`}
                                    height={48}
                                    width={48}
                                    priority={true}
                                />
                            </div>
                        </Link>
                        
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Menu />
                </div>
            </div>
            <Progress value={progress} className="w-full bg-transparent h-[2px]" />
        </div>
    )
}

export default Header