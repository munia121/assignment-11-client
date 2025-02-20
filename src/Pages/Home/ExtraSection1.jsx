/* eslint-disable react/no-unescaped-entities */
import img1 from '../../assets/image1.jpeg'
import img from '../../assets/images (4).jpeg'
import img2 from '../../assets/images (6).jpeg'
import img3 from '../../assets/images (5).jpeg'
import { IoIosStar } from 'react-icons/io';
import { useEffect, useState } from 'react';
import ExtraSection1Card from './ExtraSection1Card';
const ExtraSection1 = () => {
    const [updatedBooks, setUpdatedBooks] = useState([])
    console.log(updatedBooks)
    const [dataLength, setDataLength] = useState(3)


    useEffect(() => {
        fetch('https://assignment-11-server-eight-tau.vercel.app/updatedBooks')
            .then(res => res.json())
            .then(data => setUpdatedBooks(data))
    }, [])

    return (
        <div>
            <div className='lg:mt-44 p-5 lg:w-[1200px] mx-auto'>
                <h3 className='lg:text-4xl font-bold lato'>Student ePortfolios & Blogs</h3>
                <div className=' lg:flex gap-7 mt-5 lg:relative  '>
                    <div className=''>
                        <img className='lg:h-[400px] rounded-lg lg:w-[700px]' src={img1} alt="" />
                    </div>
                    <div className='bg-gradient-to-r transition-transform lg:hover:scale-125 shadow-2xl shadow-green-300 from-[#d4e09b] to-[#c4f1be] border-[#f29c94] lg:ml-[600px] lg:-mt-20 lg:absolute border lg:h-[350px] p-10 rounded-lg'>
                        <p className='lg:w-[300px] lg:text-xl font-lato lato font-bold'> As the first and largest provider of blogs in education, we know the tools and methodologies needed to help students succeed in using blogs as part of their K-12 education..</p>
                        <p className='border text-center rounded-full border-black mt-5 w-[200px]'>About us</p>
                    </div>
                </div>
            </div>

            {/* ********* */}
            <section className='mt-44 lg:w-[1300px] mx-auto'>
                <div className='lg:flex gap-10'>
                    <div className='p-4'>
                        <p className="text-xl lato">Taste The New Spice</p>
                        <h3 className="text-4xl mt-2 lato">New Updated Books</h3>
                        <hr className='mt-10' />
                        <p className='text-xl mt-10 font-lato'>Set against the backdrop of a post-apocalyptic world where humanity teeters on the brink of extinction, 'Echoes of Tomorrow' by acclaimed author J.K. Reynolds takes readers on an electrifying journey through the ruins of civilization. As survivors struggle to rebuild amidst the chaos, a young protagonist,  </p>
                        <div className='flex gap-10 mt-10 font-bold'>
                            <p onClick={() =>setDataLength(updatedBooks.length)} className='border lg:px-14 px-5 py-3 rounded-lg bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] border-[#f29c94]'>View All</p>
                            <p className='border px-5 lg:px-14 py-3'>Read More</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
                        {/* <div className='shadow-lg p-4 '>
                            <img className='lg:w-[800px] md:w-[400px] w-full lg:h-[200px]' src={img} alt="" />
                            <div className='space-y-3 mt-2'>
                                <p>AdventureFun</p>
                                <hr />
                                <p className='text-2xl font-bold'> Gone Girl</p>
                                <p>By : DAN BROWN</p>
                                <div className='flex'>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='shadow-lg p-4'>
                            <img className='lg:w-[800px] md:w-[400px] w-full lg:h-[200px]' src={img2} alt="" />
                            <div className='space-y-3 mt-2'>
                                <p>AdventureFun</p>
                                <hr />
                                <p className='text-2xl font-bold'> Third Reich</p>
                                <p>By : DAN BROWN</p>
                                <div className='flex'>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar />
                                </div>
                            </div>
                        </div>
                        <div className=' shadow-lg p-4'>
                            <img className='lg:w-[800px] md:w-[400px] w-full lg:h-[200px]' src={img3} alt="" />
                            <div className='space-y-3 mt-2'>
                                <p>AdventureFun</p>
                                <hr />
                                <p className='text-2xl font-bold'> Davina Code</p>
                                <p>By : DAN BROWN</p>
                                <div className='flex'>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar className='text-yellow-300'/>
                                <IoIosStar />
                                </div>
                            </div>
                        </div> */}
                        {
                            updatedBooks.slice(0,dataLength).map(item => <ExtraSection1Card key={item._id} item={item}></ExtraSection1Card>)
                        }

                        <div className={dataLength === updatedBooks.length && 'hidden'}>
                            <button onClick={() =>setDataLength(updatedBooks.length)} className='border bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] border-[#f29c94] px-4 py-2 text-center flex justify-center'>See More</button>
                        </div>
                    </div>
                       
                </div>
            </section>

        </div>
    );
};

export default ExtraSection1;