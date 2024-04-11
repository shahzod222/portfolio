import React from "react";
import { experienceData } from "../data/experienceData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useAppContext } from "../utils/AppContext";
import CustomContainer from "../utils/CustomContainer";

const Experience = () => {
  const { isDark } = useAppContext();
  return (
    <CustomContainer name="experience">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
          </div>
          <div></div>
        </div>

        <VerticalTimeline lineColor={`${isDark ? "white" : "black"}`}>
          {experienceData.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName={`${isDark ? "text-white" : "text-black"}`}
                icon={
                  <img
                    src={element.icon}
                    className="w-full h-full rounded-full "
                  />
                }
                contentStyle={{
                  background: `${isDark ? "rgb(209 213 219)" : "#f2f2f2"}`,
                  color: `${!isDark ? "black" : "rgb(10 10 10)"}`,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${
                    isDark ? "rgb(209 213 219)" : "#f2f2f2"
                  }`,
                }}
              >
                <h3 className="vertical-timeline-element-title font-bold text-2xl">
                  {element.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h4>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </CustomContainer>
  );
};

export default Experience;
