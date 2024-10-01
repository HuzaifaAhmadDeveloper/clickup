import React from "react";

const BannerContent = () => {
    return (
        <div className="flex flex-col justify-center items-center  space-y-6 mb-8 mt-16">
            {/* Main Heading */}
            <h1 className="text-black text-6xl font-bold text-center max-w-5xl">
                The everything app for work
            </h1>

            {/* Small Paragraph */}
            <p className="text-gray-600 text-lg text-center max-w-xl">
                <span className="font-bold text-black">Now with Chat, powered by AI.</span> One place for teams of all sizes to communicate and get work done.
            </p>

            {/* Get Started Button */}
            <button className="bg-purple-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:translate-y-1">
                Get Started. It’s free →
            </button>


            {/* Very Small Text */}
            <p className="text-gray-500 text-sm text-center">
                Free Forever. No Credit Card.
            </p>
        </div>
    );
};

export default BannerContent;
