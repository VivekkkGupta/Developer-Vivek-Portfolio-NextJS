import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

export default function RootLatout({ children }) {
    return (
        <>
            <div className="flex h-screen flex-col">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
