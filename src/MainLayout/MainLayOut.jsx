import { Outlet } from 'react-router-dom';
import NavBar from '../Component/NavBar';

const MainLayOut = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;