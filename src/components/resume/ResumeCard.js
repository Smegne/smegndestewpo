import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-white text-black hover:bg-gray-100 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-blue-500 duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 group-hover:text-gray-800 duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-white bg-blue-600 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-800 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
