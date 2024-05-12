import { Link } from 'react-router-dom';
import image from '../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='cover w-full h-screen' src={image} alt="" />
            <Link to={'/'}>
                <button className='btn absolute lg:-mt-44 lg:ml-[900px]'>Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;