import React from 'react'

const BottomDivSection = (props) => {
  const programmationLine = props.programmationLine
  return (
    <div className=" md:p-6 bg-gray-200 md:w-[80%] w-[85%] h-full grid md:grid-flow-col grid-cols-1 md:grid-cols-4 rounded-t-lg  duration-300 md:mb-0">
        {programmationLine.map((programmationLine) => {
          return (
            <div key={programmationLine.id} className="gap-4">
              <div className="flex justify-center items-center h-full md:border-gray-200  md:my-0 px-16 py-4 duration-300">
                <div
                  className={`flex justify-center items-center flex-col md:h-[50%] ${
                    programmationLine.id === 1
                      ? ""
                      : "md:border-l-[1px] md:border-t-0 md:border-gray-500 border-t-[1px] border-gray-500"
                  } w-full`}
                >
                  <div className="text-2xl pt-6 md:pt-0  md:block duration-300">
                    {programmationLine.icon}
                  </div>
                  <div className="font-semibold flex items-center justify-center duration-300">
                    {programmationLine.title}
                  </div>
                  <div>{programmationLine.content}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default BottomDivSection