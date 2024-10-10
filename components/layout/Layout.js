import React from 'react'
import Link from "next/link"

const Layout = ({children}) => {
    return (
        <>
            <header>
                <h2>CRM</h2>
                <Link href="/add-customer"> Add Customer</Link>
            </header>
            <div className="">
                {children}
            </div>
            <footer>
                By Emaad &copy;
            </footer>
        </>
    )
}

export default Layout
