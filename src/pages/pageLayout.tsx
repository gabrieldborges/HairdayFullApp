import { Outlet } from "react-router"
import Header from "../components/CoreComponents/Header"
import Footer from "../components/CoreComponents/Footer"

export default function PageLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}