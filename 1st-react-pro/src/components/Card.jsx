import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="bg-orange-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
        {/* <!-- Top --> */}
        <div>
          <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
            <span className="bg-white px-3 py-1 rounded-full">{props.date}</span>
            <span className="text-lg font-bold">a</span>
          </div>

          <p className="text-md text-blue-500">
            {props.company} <small classNameName="text-gray-500">{props.posted}</small>
          </p>
          <h3 className="text-lg font-semibold text-gray-900">
            {props.role}
          </h3>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs bg-white px-3 py-1 rounded-full text-black">
              Part time
            </span>
            <span className="text-xs bg-white px-3 py-1 rounded-full text-black">
              Senior level
            </span>
            <span className="text-xs bg-white px-3 py-1 rounded-full text-black">
              Distant
            </span>
            <span className="text-xs bg-white px-3 py-1 rounded-full text-black">
              Project work
            </span>
          </div>
        </div>

        {/* <!-- Bottom --> */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="font-semibold text-black">{props.salary}</p>
            <p className="text-xs text-gray-500">{props.location}</p>
          </div>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
