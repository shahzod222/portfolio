import { useAppContext } from "../utils/AppContext";
import CustomContainer from "../utils/CustomContainer";

const About = () => {
  const { t } = useAppContext();
  return (
    <CustomContainer name="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {t("about.intro")}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{t("about.title")}</p>
          </div>
          <div>
            <p>{t("about.info")}</p>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default About;
