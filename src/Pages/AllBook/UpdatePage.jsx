import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import image from '../../assets/cover.jpg'


const UpdatePage = () => {
    const book = useLoaderData()
    const navigate = useNavigate()
    
    const { _id, photo, name, author, ratings } = book;
    

    const handlerAddBook = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;        
        const ratings = parseFloat(form.ratings.value)
        const author = form.author.value

        // const email = user.email;
        // const userName = user.displayName;
        // const photo = form.photo.value;

        const updateBook = { name, category,  ratings, author, photo }
        console.log(updateBook)


        fetch(`http://localhost:5000/updateBook/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    form.reset()
                    navigate('/allBooks')
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })
        

        
    }


    const [selectCategory, setSelectCategory] = useState('');

    // Function to handle option selection


    const handleCategory = (event) => {
        setSelectCategory(event.target.value);
    };



    return (
        <div>
            <div className=" mt-20 p-2 lg:p-24 rounded-lg" style={{
                backgroundImage: `url(${image})`,

            }}>
                <h2 className="text-3xl font-extrabold text-center">Please Update Your  Book</h2>

                <form onSubmit={handlerAddBook} className=" p-5 lg:p-10 border-[#f29c94] lg:mt-20">
                    {/* form name and quanity row */}
                    <div className="md:flex items-center justify-center mt-10 gap-16">
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name="name" defaultValue={name} className="input border-[#f29c94] input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2 ">
                            <div>
                                <h2>Category Name</h2>
                                {/* Dropdown menu */}
                                <select className='w-full px-3 h-12 border border-[#f29c94] rounded-lg' name='category' value={selectCategory} onChange={handleCategory}>
                                    <option className='w-50' value="">Select...</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="History">History</option>
                                    <option value="Drama">Drama</option>
                                </select>
                                {/* Display selected option */}
                                {/* <p>You selected: {selectedOption}</p> */}
                            </div>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mt-10 gap-16">
                        {/* <div className="md:w-1/2">
                            <label className=" form-control">
                                <div className="label">
                                    <span className="label-text">Quantity</span>
                                </div>
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input border-[#f29c94] input-bordered w-full " />
                            </label>
                        </div> */}
                        {/* <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Ratings</span>
                                </div>
                                <input type="text" name="ratings" defaultValue={ratings} placeholder="ratings" className="input border-[#f29c94] input-bordered w-full " />
                            </label>
                        </div> */}
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mt-10 gap-16">
                    <div className="md:w-1/2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Ratings</span>
                                </div>
                                <input type="text" name="ratings" defaultValue={ratings} placeholder="ratings" className="input border-[#f29c94] input-bordered w-full " />
                            </label>
                        </div>
                        <div className="md:w-1/2">
                            <label className=" form-control ">
                                <div className="label">
                                    <span className="label-text">Author Name</span>
                                </div>
                                <input type="text" name="author" defaultValue={author} placeholder="Author name" className="input border-[#f29c94] input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    {/* **************** */}

                    {/* ******************* */}

                    {/* ***** form photo url */}
                    <div className="w-full mt-8">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input border-[#f29c94] input-bordered w-full " />
                        </label>
                    </div>
                    <input type="submit" value="Update Book" className="btn btn-block mt-8 bg-[#f29c94] text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;
