import React from 'react';

const ClickUpBrain = () => {
  return (
    <div className="flex justify-between items-center bg-purple-50 rounded-2xl p-10 shadow-lg border border-gray-200 max-w-screen-lg h-auto mx-auto mt-12">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-pink-500">ClickUp Brain</h1>
        <h2 className="text-2xl font-semibold mt-2">One AI for all your work</h2>
        <p className="mt-4 text-lg">
          Add to any paid plan for <strong>$7/user/mo</strong>
        </p>
        <p className="mt-2 text-lg">
          Instantly power up company-wide AI that connects every aspect of your work, across all your apps.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600">
            Try for free →
          </button>
          <button className="border-2 border-pink-500 text-pink-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-pink-500 hover:text-white">
            Learn more
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-col space-y-6 relative">
        {/* Icons on the left side */}
        {/* <div className="absolute top-0 left-8 flex flex-col items-center space-y-4">
          <FaSlack className="text-blue-500 text-3xl" />
          <FaMicrosoft className="text-blue-600 text-3xl" />
          <FaGithub className="text-black text-3xl" />
          <FaDropbox className="text-blue-400 text-3xl" />
          <FaSalesforce className="text-blue-500 text-3xl" />
        </div> */}

        {/* The cards */}
        <div className="flex space-x-4 justify-end">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-60 text-center">
            How are we tracking against the roadmap?
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-60 text-center">
            What should I focus on next?
          </div>
        </div>
        <div className="flex space-x-4 justify-end">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-60 text-center">
            Turn my notes into a PRD
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-60 text-center">
            Write release notes
          </div>
        </div>
        <div className="flex space-x-4 justify-end">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-60 text-center">
            Create task for our engineer
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickUpBrain;
