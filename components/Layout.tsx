import Head from 'next/head'
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <>
            <Head> 
                <title>New Roots</title>
                <link rel="stylesheet" href="https://use.typekit.net/wmo1wab.css"></link>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
        
    )
}

export default Layout