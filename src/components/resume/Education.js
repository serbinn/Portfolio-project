import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Geography & Geographic information systems"
            subTitle="Belarussian State University (2001 - 2006)"
            result="7.8/10"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Middle school (1995 - 2001)"
            result="5.0/5"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Primary School (1991 - 1995)"
            result="5.0/5"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
            title="Internet-marketer"
            subTitle="Nike"
            result="Minsk"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education