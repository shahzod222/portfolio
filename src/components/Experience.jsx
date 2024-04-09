import React from "react";
import RsLogo from "../assets/rslogo.jpeg";
import DsrLogo from "../assets/dsr.jpeg";
import { timelineElements } from "../data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const icons = {
  rss: RsLogo,
  dsr: DsrLogo,
};

const Experience = () => {
  return (
    <div
      name="experience"
      className="flex justify-center items-center w-full min-h-screen h-full bg-[#0a192f] pt-[80px] pb-4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 text-gray-300">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
          </div>
          <div></div>
        </div>

        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date text-white"
                icon={
                  <img
                    src={icons[element.icon]}
                    className="w-full h-full rounded-full "
                  />
                }
                contentStyle={{ background: "rgb(209 213 219)" }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(209 213 219)",
                }}
              >
                <h3 className="vertical-timeline-element-title font-bold text-2xl text-neutral-950">
                  {element.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-stone-950">
                  {element.location}
                </h4>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
