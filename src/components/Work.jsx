import { FaCode } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { workData } from "../data/workData.js";
import CustomButton from "../utils/CustomButton";
import CustomContainer from "../utils/CustomContainer";
import WorkCard from "../utils/WorkCard.jsx";
import { useAppContext } from "../utils/AppContext.jsx";

const Work = () => {
  const { t } = useAppContext();

  return (
    <CustomContainer name="work">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            {t("work.intro")}
          </p>
          <p className="py-6">{t("work.title")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {workData.map((item, index) => (
            <WorkCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <a href="https://github.com/shahzod222?tab=repositories" target="_blank">
        <CustomButton type="outline">
          <span>{t("work.button")}</span>
        </CustomButton>
      </a>
    </CustomContainer>
  );
};

export default Work;
