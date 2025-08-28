import { Outlet } from 'react-router-dom'
import Header from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout
