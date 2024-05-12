/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/loginLogo.jpeg'
import image from '../assets/login.jpg'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const { userLogin, googleLogin,  } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value

        console.log('login', email, password)


        if (!password) {
            setError('Invalid password')
        }


        setError('')


        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                toast.success('Login success')
                navigate(location?.state ? location.state : '/')

            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                setError('invalid password or email')
                toast.warn("Invalid password or email")
            })

    }

    const googleHandle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success('Login success')
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)

            })

    }



    // const gitHubHandle = () => {
    //     gitHubLogin()
    //         .then(result => {
    //             console.log(result.user)
    //             navigate(location?.state ? location.state : '/')

    //         })
    //         .catch(error => {
    //             console.log(error)

    //         })

    // }


    return (
        <div>
            <div className="hero  min-h-screen mt-20">
                <div className=" flex-col ">
                    <div className="text-center ">
                        <img className="mx-auto" src={logo} alt="" />
                    </div>
                    <div className="w-full lg:w-[1200px] lg:flex mt-4 lg:mt-10  mx-auto bg-base-100">
                       <div>
                            <img className=" lg:w-[640px]" src={image} alt="" />
                       </div>
                        <form onSubmit={handleSubmit} className="rounded-lg card-body bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] border">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <span className="absolute ml-[200px] mt-14 lg:ml-[450px]" onClick={() => setShowPassword(!showPassword)}>

                                    {
                                        showPassword ? <FaRegEye size={30}></FaRegEye> :
                                            <FaRegEyeSlash size={30}></FaRegEyeSlash>


                                    }

                                </span>
                                {
                                    error && <p className="text-red-600">{error}</p>
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] text-white text-lg">Login</button>
                            </div>


                            <p>Don't you have an account? <Link className="text-pink-700 underline" to={'/register'}>Register now</Link></p>
                            <div className="flex gap-4  items-center justify-between mt-5">

                                <p className="w-full h-0.5 bg-black"></p>
                                <p>or</p>
                                <p className="w-full h-0.5 bg-black"></p>

                            </div>
                            <div className="mt-6 mx-auto   gap-8">
                                <p onClick={googleHandle} className=" border border-[#f29c94] lg:w-[400px] px-4 py-2 rounded-md ">
                                    <FcGoogle className="w-full" size={30}></FcGoogle>
                                </p>

                                <p  className="px-4 mt-3 py-2 lg:w-[400px] border-[#f29c94] rounded-md border">
                                    <FaGithub className="w-full" size={30}></FaGithub>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;