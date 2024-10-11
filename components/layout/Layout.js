import React from 'react'
import Link from "next/link"

const Layout = ({children}) => {
    return (
        <>
            <header className='header'>
                <h2>CRM</h2>
                <Link href="/add-customer"> Add Customer</Link>
            </header>
            <div className="main">
                {children}
            </div>
            <footer className='footer'>
                By Emaad &copy;
            </footer>
        </>
    )
}

export default Layout
