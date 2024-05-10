/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import image from '../../assets/image4.webp'
const ExtraSection3 = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <div className='lg:flex gap-8 mt-20 items-center' >
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='lg:w-[800px] text-xl'>
                    <p className='text-2xl font-bold '>About us</p>
                    <p className='mt-8 '>Books give a soul to the universe, wings to the mind, flight to the imagination. and life to everything. - Plato</p>
                    <p className='mt-5'>  InSight books is a repository of children's books - Fiction, Non-Fiction. Literature. Classics, Academic and Competitive Exam books, which range from from Indian and international authors. It's an online portal where your search for every book ends.</p>
                    <p className='w-[200px] rounded-full text-center p-2 mt-5 bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] border border-[#f29c94]'>Know more</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection3;