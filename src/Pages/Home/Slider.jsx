import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import { FaArrowRight } from 'react-icons/fa';
import img1 from '../../assets/image1.jpeg'
import img2 from '../../assets/image2.webp'
import img3 from '../../assets/image3.jpg'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <div className='container mx-auto mt-20'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}


                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className='w-full bg-center rounded-lg bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${img1})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>

                                        Welcome to Our Literary Haven
                                    </h1>
                                    <br />
                                    <Link to={'/add-job'}>
                                        <button className='w-full px-5 py-4 mt-4 text-sm capitalize transition-colors duration-300 transform bg-[#a8ec9f] font-bold rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                            Our Book Collection
                                        </button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='w-full rounded-lg bg-center bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${img2})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                        Enter Our Realm of Infinite Possibilities
                                    </h1>
                                    <br />
                                    <button className='w-full px-5 py-4 mt-4 text-sm font-bold bg-[#a8ec9f] capitalize transition-colors duration-300 transform  rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                        Our Book Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='w-full bg-center rounded-lg bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${img3})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                        Find Your Next Favorite Read Here
                                    </h1>
                                    <br />
                                    <button className='w-full px-5 py-4 mt-4 text-sm font-bold bg-[#a8ec9f] capitalize transition-colors duration-300 transform  rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                                        Our Book Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>





        </div>
    );
};

export default Slider;