import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ExtraSection1></ExtraSection1>
            <h1 className="text-6xl text-center mt-10">Category Part</h1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;