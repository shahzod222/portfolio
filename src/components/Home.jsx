import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useAppContext } from "../utils/AppContext";
import CustomButton from "../utils/CustomButton";
import CustomContainer from "../utils/CustomContainer";

const Home = () => {
  const { isDark } = useAppContext();
  return (
    <CustomContainer name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi,my name is</p>
        <h1
          className={"text-4xl sm:text-7xl font-bold"}
          style={{ color: `${isDark ? "#ccd6f6" : "#0d1c4c"}` }}
        >
          Shahzod Ubaydullaev
        </h1>
        <h2
          className="text-4xl sm:text-7xl font-bold"
          style={{ color: `${isDark ? "#3e465e" : "#32384b"}` }}
        >
          I'm Front-End Developer
        </h2>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <CustomButton type="outline">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Home;
