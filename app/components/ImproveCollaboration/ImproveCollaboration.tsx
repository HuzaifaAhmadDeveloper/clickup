const ImproveCollaboration = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 gap-10">
            {/* Left Half: Content Section */}
            <div className="lg:w-1/2 flex flex-col space-y-8">
                {/* Heading: Improve Collaboration */}
                <h2 className="text-4xl font-bold bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    Improve collaboration
                </h2>

                {/* Paragraph */}
                <p className="text-gray-600 text-lg">
                    Get your teams working together more closely, even if they’re far apart. Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.
                </p>

                {/* Small Cards Row */}
                <div className="flex space-x-4">
                    <div className="bg-white shadow-md rounded-lg p-4 text-center text-lg font-normal cursor-pointer">
                        Comments
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center text-lg font-normal cursor-pointer">
                        Docs
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center text-lg font-normal cursor-pointer">
                        Whiteboards
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center text-lg font-normal cursor-pointer">
                        Clips
                    </div>
                </div>

                {/* Heading: Enhance Visibility */}
                <h2 className="text-4xl font-bold cursor-pointer text-pink-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition duration-300">
                    Enhance visibility
                </h2>

                {/* Heading: Automate Work */}
                <h2 className="text-4xl font-bold cursor-pointer text-pink-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition duration-300">
                    Automate work
                </h2>

            </div>

            {/* Right Half: Image Section */}
            <div className="lg:w-1/2 ">
                <img
                    src="https://images.ctfassets.net/w8fc6tgspyjz/3CaOf3lz2646UYevu9iKEo/699571cd5326f2ffb9a8121a3eaf9118/collaborate.png?fm=avif&q=50&w=800"
                    alt="Collaboration image"
                    className="w-full h-auto rounded-lg shadow-lg "
                />
            </div>
        </div>
    );
};

export default ImproveCollaboration;
