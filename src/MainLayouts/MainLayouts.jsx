import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'


const MainLayouts = () => {



    return (



        <div>
            {/* navbar  */}
            <Navbar  />

            {/* dynamic content  */}
            <div className='h-[calc(100vh-290px)]' >
                <Outlet />

            </div>


            {/* footer  */}
            <Footer />
        </div>
    )
}

export default MainLayouts
