import React from "react";

const HowItWorks = (props) => {
  const steps = props.steps;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-4 bg-slate-200 duration-300">
      <h2 data-aos="fade-up" className='text text-3xl font-semibold text-primary mt-10'>Comment ça marche ? </h2>
      <p className="mt-1 mb-8">"On vous dit tout ! "</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8 px-10 md:px-48">
        {steps.map((step) => (
          <div className="w-full  flex flex-col items-center justify-between" key={step.id}>
            <p className="text-8xl font-bold text-primary mb-6">{step.id}</p>
            <h4 className="text-lg font-semibold w-full flex items-center justify-center pb-4 ">{step.title}</h4>
            <ul className="w-full h-full flex items-center justify-center flex-col space-y-4">
              {step.content}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
