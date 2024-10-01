"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  // Declare the selectedSection state
  const [selectedSection, setSelectedSection] = useState('Capabilities');

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsSolutionsDropdownOpen(false); // Close other dropdowns
    setIsResourcesDropdownOpen(false); // Close other dropdowns
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    setIsProductDropdownOpen(false); // Close other dropdowns
    setIsResourcesDropdownOpen(false); // Close other dropdowns
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsProductDropdownOpen(false); // Close other dropdowns
    setIsSolutionsDropdownOpen(false); // Close other dropdowns
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section); // Set the selected section when a button is clicked
  };

  const renderProducts = () => {
    switch (selectedSection) {
      case 'Capabilities':
        return (
          <div className="grid grid-cols-3 gap-x-40">
            {/* Add your product categories here */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Project Management</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Tasks</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Portfolios</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Board views</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Gantt charts</span></Link>
            </div>
            {/* Other product categories */}
          </div>
        );
      default:
        return null;
    }
  };

  const renderSolutions = () => {
    switch (selectedSection) {
      case 'Team':
        return (
          <div className="grid grid-cols-3 gap-6 p-6">
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-700 mb-2">Project Management</h3>
              <p className="text-gray-500">Empower teams to achieve goals with efficient, clear project planning.</p>
            </div>
            {/* Other solutions categories */}
          </div>
        );
      default:
        return null;
    }
  };

  const renderResourcesDropdown = () => {
    return (
      <div className="grid grid-cols-3 gap-x-10 p-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Learn</h3>
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">University</span></Link><br />
          {/* Other resources links */}
        </div>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Section 1: ClickUp Logo and Text */}
      <div className="flex items-center space-x-2 border border-gray-300 rounded-2xl px-4 py-1 ml-4 lg:ml-36 w-[250px] h-[50px]">
        <img
          src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
          alt="ClickUp"
          className="h-12 w-12"
        />
        <span className="text-sm text-gray-600">
          The everything <br />
          app for work.
        </span>
      </div>

      {/* Section 2: Product Links */}
      <div className="relative">
        <div className="hidden md:flex space-x-4">
          <button
            onClick={toggleProductDropdown}
            className="text-gray-600 hover:text-gray-900"
          >
            Product
          </button>
          <button
            onClick={toggleSolutionsDropdown}
            className="text-gray-600 hover:text-gray-900"
          >
            Solutions
          </button>
          <button
            onClick={toggleResourcesDropdown}
            className="text-gray-600 hover:text-gray-900"
          >
            Resources
          </button>
          <Link href="#">
            <span className="text-gray-600 hover:text-gray-900">Pricing</span>
          </Link>
          <Link href="#">
            <span className="text-gray-600 hover:text-gray-900">Enterprise</span>
          </Link>
        </div>

        {/* Product Dropdown */}
        {isProductDropdownOpen && (
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 grid grid-cols-4 gap-x-12 w-[1000px] z-10">
            <div className="flex flex-col space-y-4 items-start">
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Capabilities' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Capabilities')}
              >
                Capabilities
              </button>
              {/* Other product buttons */}
            </div>
            <div className="grid grid-cols-3 gap-x-12">
              {renderProducts()}
            </div>
          </div>
        )}

        {/* Solutions Dropdown */}
        {isSolutionsDropdownOpen && (
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 grid grid-cols-4 gap-x-12 w-[1000px] z-10">
            <div className="flex flex-col space-y-4 items-start">
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Team' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Team')}
              >
                Team
              </button>
              {/* Other solutions buttons */}
            </div>
            <div className="grid grid-cols-3 gap-x-12">
              {renderSolutions()}
            </div>
          </div>
        )}

        {/* Resources Dropdown */}
        {isResourcesDropdownOpen && (
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 w-[1000px] z-10">
            {renderResourcesDropdown()}
          </div>
        )}
      </div>

      {/* Section 3: Contact Sales */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2">
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900">Contact Sales</span>
        </Link>
      </div>

      {/* Section 4: Login and Sign-Up */}
      <div className="flex items-center space-x-4">
        <Link href="#">
          <span className="border border-gray-300 rounded-full px-4 py-2 text-gray-600 hover:text-gray-900">Log In</span>
        </Link>
        <Link href="#">
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full px-4 py-2 hover:from-purple-600 hover:to-indigo-600">
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
