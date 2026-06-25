import AnnouncementBar from '../components/layout/AnnouncementBar'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

type Props = {
    children: React.ReactNode
    announcementBar?: boolean
    navbar?: boolean
    footer?: boolean
}

const MainLayout = ({ children, announcementBar = true, footer = true, navbar = true }: Props) => {
    return (
        <>
            {announcementBar && <AnnouncementBar />}
            {navbar && <Navbar />}
            <main>
                {children}
            </main>
            {footer && <Footer />}
        </>
    )
}

export default MainLayout