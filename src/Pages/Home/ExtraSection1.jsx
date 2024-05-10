import img1 from '../../assets/image1.jpeg'
const ExtraSection1 = () => {
    return (
        <div className='mt-44'>
            <h3 className='text-4xl font-bold'>Student ePortfolios & Blogs</h3>
            <div className=' flex gap-7 mt-5 w-[1200px] '>
                <div className=''>
                    <img className='h-[400px] rounded-lg w-[700px]' src={img1} alt="" />
                </div>
                <div className=''>
                    <p className='w-[300px] text-2xl font-bold'> As the first and largest provider of blogs in education, we know the tools and methodologies needed to help students succeed in using blogs as part of their K-12 education..</p>
                    <p className='border text-center rounded-full mt-5 w-[200px]'>About us</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;