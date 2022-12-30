import Head from "next/head"
import Footer from "../sections/Footer"
import Header from "../sections/Header"

const Layout = ({ children }) => {
    return (
        <>

            <Head>
                <title>Next Js Tailwind Theme</title>
                <meta name="description" content="Create a dak mode in nex js theme" />
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout