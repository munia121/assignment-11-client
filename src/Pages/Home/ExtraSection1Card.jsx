/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ExtraSection1Card = ({ item }) => {
    return (
        <div>
            <div className='shadow-lg p-4 '>
                <img className='lg:w-[800px] md:w-[400px] w-full lg:h-[200px]' src={item.photo} alt="" />
                <div className='space-y-3 mt-2'>
                    <p>AdventureFun</p>
                    <hr />
                    <p className='text-2xl font-bold'>{item.category}</p>
                    <p>By : {item.author}</p>
                    <div className='flex'>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={item.ratings}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1Card;