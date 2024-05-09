import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <div className='mt-20'>
            <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide >
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/16JX8tL/image2.webp)` }}>
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Macrame Wall Hanging Kit</h1>
                                <p className='mt-4'>
                                    Create your own stunning macrame wall hangings with this complete kit, including cord, rings, and instructions.</p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/xSxYgNC/image1.jpg)` }}>

                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white' >Knitting & Crocheting Starter Kitjdf</h1>

                                <p className='text-white mt-4'>
                                    Get started with knitting and crocheting with this comprehensive starter kit, including yarn, needles, and instructions.
                                </p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********** */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/RHYSHwK/image3.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/3WfP2Yx/studenthousing1.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold ' > Textile Art Embroidery Kit</h1>

                                <p className='mt-4'>
                                    Create stunning textile art with this embroidery kit, perfect for beginners and experienced crafters alike.
                                </p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* ********* */}
                    {/* <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg ' style={{ backgroundImage: `url(https://i.ibb.co/YN1YWmN/5514af2d9fa8158f8a33c5dc5fe1ee20.jpg)` }}>
                            
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold  ' >Tie-Dyeing Starter Kit</h1>

                                <p className='text-white  mt-4'>
                                    Begin your tie-dyeing journey with this all-inclusive starter kit, featuring dyes, rubber bands, and instructions.</p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] md:w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
        </div>
    );
};

export default Slider;