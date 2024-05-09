import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <h1>hello bangladesh</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;