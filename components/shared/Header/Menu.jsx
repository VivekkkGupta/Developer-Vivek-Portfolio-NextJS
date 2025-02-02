import { MenuIcon, Sun, SunIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Menu() {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <div className='flex gap-3'>

                    <Link href="/home">
                        Home
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/resume">
                        Resume
                    </Link>
                </div>

                <button>
                    <SunIcon size={24} />
                </button>
                <button>
                    <MenuIcon size={24} />
                </button>
                <button>
                    <Link href="/sign-in">
                        <UserIcon size={24} />
                    </Link>
                </button>
            </nav>
            <nav className="md:hidden">

            </nav>
        </div>
    )
}

export default Menu