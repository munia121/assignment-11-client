import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/register.webp'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate()
    // const loaction = useLocation()

    const { createUser, updateUserProfile, setAutoUpdate, googleLogin } = useContext(AuthContext);

    const [passError, setPassError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [urlError, setUrlError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value

        console.log('register:', name, email, password, photo)




        setPassError('')
        setEmailError('')
        setNameError('')
        setUrlError('')



        if (password.length < 6) {
            setPassError('Length must be at least 6 character')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setPassError('Must have an Uppercase lett er in the password')
            return;
        }


        if (!/[a-z]/.test(password)) {
            setPassError('Must have a Lowercase lett er in the password');
            return;
        }

        if (!/[#$@&]/.test(password)) {
            setPassError('Password cannot contain #, $, @, or &');
            return;
        }

        //    if (!/^={6,}$/.test(password)) {
        //     setPassError('Six Characters are required');
        //     return;
        // }


        if (!email) {
            setEmailError('Please Enter the Email')
            return
        }
        if (!name) {
            setNameError('Please Enter the Name')
            return
        }
        if (!photo) {
            setUrlError('Please Enter your Photo URL')
            return
        }








        createUser(email, password)
            .then(result => {

                updateUserProfile(name, photo)
                    .then(() => {
                        // console.log()
                        setAutoUpdate(true)

                    })
                    .catch(error => {
                        console.log(error)
                    })

                console.log(result.user)
                e.target.reset()
                toast.success('Register Successfully')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const googleHandle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success('Register success')
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)

            })

    }




    return (
        <div>
            <div className="hero  mt-20 min-h-screen rounded-lg " style={{
                backgroundImage: `url(${image})`,

            }}>
                <div className="hero-content flex-col ">
                    <div className="text-center mt-10 ">
                        <h1 className="md:text-5xl  font-bold">Register Form</h1>

                    </div>
                    <div className="w-full card md:w-[800px] mx-auto mt-10 opacity-75 bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body border-4 border-[#f29c94] rounded-lg">
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered border-black" />
                                {nameError && <p className="text-red-600">{nameError}</p>}
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border-black" />
                                {emailError && <p className="text-red-600">{emailError}</p>}
                            </div>
                            {/* ******** */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="URL" className="input input-bordered border-black" />
                                {urlError && <p className="text-red-600">{urlError}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered border-black" />
                                {
                                    passError && <p className="text-red-600">{passError}</p>
                                }

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#f5d3d0] to-[#f29c94]  text-lg">Register</button>
                            </div>

                            <div className="flex">
                                <p className="font-bold">Have you any account? <Link className="text-[#f29c94] underline" to={'/login'}>Login</Link></p>
                                <div className="mt-6 mx-auto  flex gap-8">
                                    <p onClick={googleHandle} className=" border border-[#f29c94] bg-black px-4 py-2 rounded-md ">
                                        <FcGoogle className="" size={30}></FcGoogle>
                                    </p>

                                    <p className="px-4  py-2  border-[#f29c94] bg-black rounded-md border">
                                        <FaGithub className=" text-white" size={30}></FaGithub>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;