import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useAppContext } from "../utils/AppContext";
import CustomButton from "../utils/CustomButton";
import CustomContainer from "../utils/CustomContainer";

const Home = () => {
  const { isDark, t } = useAppContext();
  return (
    <CustomContainer name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">{t("home.greeting")}</p>
        <h1
          className={"text-4xl sm:text-7xl font-bold"}
          style={{ color: `${isDark ? "#ccd6f6" : "#0d1c4c"}` }}
        >
          {t("home.name")}
        </h1>
        <h2
          className="text-4xl sm:text-7xl font-bold"
          style={{ color: `${isDark ? "#3e465e" : "#32384b"}` }}
        >
          {t("home.subtitle")}
        </h2>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <CustomButton type="outline">
              {t("home.button")}
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
