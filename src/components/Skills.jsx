import { skillsData } from "../data/skillsData";
import SkillElement from "../utils/SkillElement";
import CustomContainer from "../utils/CustomContainer";
import { useAppContext } from "../utils/AppContext";

const Skills = () => {
  const { t } = useAppContext();

  return (
    <CustomContainer name="skills">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            {t("skills.intro")}
          </p>
          <p className="py-4">{t("skills.title")}</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 ">
          {skillsData.map((el) => {
            return <SkillElement name={el.name} img={el.img} key={el.id} />;
          })}
        </div>
      </div>
    </CustomContainer>
  );
};

export default Skills;
