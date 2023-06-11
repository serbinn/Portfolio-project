import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Mapbox - (2023 - Present)"
            result="Minsk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Data enrichment spesialist"
            subTitle="Mapbox"
            result="Minsk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Sole Propriator"
            subTitle="Belarus - (2006 - 2022)"
            result="Minsk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Geodesy Instructor"
            subTitle="Sole Propriator (2019 - 2022)"
            result="Minsk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Internet marketer"
            subTitle="Sole Propriator (2010 - 2018)"
            result="Grodno"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Gomel Secondary School (2006 - 2010)"
            result="Gomel"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
