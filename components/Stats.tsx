"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 20, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 250, text: "Code commits" },
];
const Stats = () => {
  return (
    <div className=" pt-4 lg:pt-0 lg:pb-0">
      <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {stats.map((item, index) => {
            return (
              <div
                className=" flex-1 flex gap-4 items-center justify-center lg:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={3}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15
                      ? " max-w-[100px] text-white-100"
                      : "max-w-[150px] text-white-100"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
