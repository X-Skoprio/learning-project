import React from "react";

const HowItWorks = (props) => {
  const steps = props.steps;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-4 duration-300 bg-slate-50">
      <h2 data-aos="fade-up" className='text text-4xl font-bold text-primary  mt-10'>Comment ça marche ? </h2>
      <p className="mt-1 mb-8 "><span className="font-bold">&quot;</span> On vous explique tout ! <span className="font-bold">&quot;</span></p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 mb-12 px-10 md:px-48">
        {steps.map((step) => (
          <div className="w-full  flex flex-col items-center justify-between py-6 md:py-12" key={step.id}>
            <p className="text-8xl font-bold text-primary mb-6">{step.id}</p>
            <h4 className="text-lg font-semibold w-full flex items-center justify-center pb-4 ">{step.title}</h4>
            <ul className="w-full h-full flex items-center justify-center flex-col space-y-2 md:mb-5 text-justify px-5 text-slate-400">
              {step.content}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
