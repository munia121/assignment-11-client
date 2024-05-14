import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';

const MainLayOut = () => {
    return (
        <div>
            <div className='lg:container  mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;