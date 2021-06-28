import Header from "../header/Header"
import Search from "../search/Search"
import Tabs from "../tabs/Tabs"
import Gallery from "../gallery/Gallery"

const Layout = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Search />
                <Tabs />
                <Gallery />
            </div>
        </>
    )
}

export default Layout
