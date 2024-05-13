import img1 from '../../assets/image1.jpeg'
const ExtraSection1 = () => {
    return (
        <div className='lg:mt-44 p-5 lg:w-[1200px] mx-auto'>
            <h3 className='lg:text-4xl font-bold '>Student ePortfolios & Blogs</h3>
            <div className=' lg:flex gap-7 mt-5 lg:relative  '>
                <div className=''>
                    <img className='lg:h-[400px] rounded-lg lg:w-[700px]' src={img1} alt="" />
                </div>
                <div className='bg-gradient-to-r shadow-2xl shadow-green-300 from-[#d4e09b] to-[#c4f1be] border-[#f29c94] lg:ml-[600px] lg:-mt-20 lg:absolute border lg:h-[350px] p-10 rounded-lg'>
                    <p className='lg:w-[300px] lg:text-2xl font-lato font-bold'> As the first and largest provider of blogs in education, we know the tools and methodologies needed to help students succeed in using blogs as part of their K-12 education..</p>
                    <p className='border text-center rounded-full border-black mt-5 w-[200px]'>About us</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;