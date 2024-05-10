import img1 from '../../assets/image1.jpeg'
const ExtraSection1 = () => {
    return (
        <div className='mt-44 p-5'>
            <h3 className='text-4xl font-bold'>Student ePortfolios & Blogs</h3>
            <div className=' lg:flex gap-7 mt-5 lg:relative lg:w-[1200px] '>
                <div className=''>
                    <img className='lg:h-[400px] rounded-lg lg:w-[700px]' src={img1} alt="" />
                </div>
                <div className='bg-[#d4e09b] border-[#f29c94] lg:ml-[600px] lg:-mt-20 lg:absolute border lg:h-[350px] p-10 rounded-lg'>
                    <p className='lg:w-[300px] text-2xl font-bold'> As the first and largest provider of blogs in education, we know the tools and methodologies needed to help students succeed in using blogs as part of their K-12 education..</p>
                    <p className='border text-center rounded-full border-black mt-5 w-[200px]'>About us</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;