import Footer from '@/components/shared/Footer/page'
import Header from '@/components/shared/Header'
import React from 'react'

export default function RootLatout({ children }) {
    return (
        <>
            <div className="flex min-h-screen flex-col w-full relative">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
