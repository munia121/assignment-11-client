
const ExtraSection2 = () => {
    return (
        <div>
            <div className="text-center rounded-lg lg:mt-20 border bg-gradient-to-r from-[#d4e09b] to-[#c4f1be] border-[#f29c94] p-4 lg:py-20">
                <h1 className="text-4xl font-bold">Get Our Latets Update !</h1>
                <p className="text-[#f08e85] mt-4">Subscribe to our latest newsletter to get news about special discounts.</p>
                <div className="mt-10 ">
                    <input type="text" placeholder="Your email Address" className="border rounded-l-lg py-3 p-3 lg:w-[500px] w-full" />
                    <button className="border py-3 px-5 bg-gradient-to-r from-[#d4e09b] to-[#c4f1be]  border-[#f29c94] font-bold rounded-r-lg"> Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;