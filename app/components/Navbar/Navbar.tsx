"use client";
import { useState } from 'react';
import Link from 'next/link';
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  // Declare the selectedSection state
  const [selectedSection, setSelectedSection] = useState('Capabilities');
  const [isSelected, setSelected] = useState('Team');

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
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Project Management</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📋 <span className="ml-2">Tasks</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📁 <span className="ml-2">Portfolios</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🗂️ <span className="ml-2">Board views</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📅 <span className="ml-2">Gantt charts</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Product Development</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🔄 <span className="ml-2">Sprints</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📝 <span className="ml-2">Sprint Reports</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📊 <span className="ml-2">Kanban</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🗂️ <span className="ml-2">Roadmap & Backlog</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Knowledge Management</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📄 <span className="ml-2">Docs</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📚 <span className="ml-2">Wikis</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🤖 <span className="ml-2">Ask AI</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🔍 <span className="ml-2">Connected search</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Resource Management</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              ⏱️ <span className="ml-2">Time Tracking</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📊 <span className="ml-2">Workload views</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🎯 <span className="ml-2">Goals</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📈 <span className="ml-2">Dashboards</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Collaboration</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📄 <span className="ml-2">Docs</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🖍️ <span className="ml-2">Whiteboards</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              💬 <span className="ml-2">Chat</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📥 <span className="ml-2">Inbox</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Workflow</h3>
              <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              ⚙️ <span className="ml-2">Automations</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📋 <span className="ml-2">Forms</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🔧 <span className="ml-2">Custom fields</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🛠️ <span className="ml-2">Custom statuses</span>
            </span>
          </Link>
            </div>
          </div>
        );
      case 'All Features':
        return (
          <div className="grid grid-cols-3 gap-x-44">
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📝 <span className="ml-2 mt-2">Tasks</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📄 <span className="ml-2 mt-2">Docs</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💬 <span className="ml-2 mt-2">Chat</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🤖 <span className="ml-2 mt-2">AI</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🧠 <span className="ml-2 mt-2">Mind maps</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🖍️ <span className="ml-2 mt-2">Whiteboads</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📊 <span className="ml-2 mt-2">Dashboard</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📅 <span className="ml-2 mt-2">Gantt</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🔍 <span className="ml-2 mt-2">Proofing</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            ✉️ <span className="ml-2 mt-2">Email</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🤖 <span className="ml-2 mt-2">Automations</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📅 <span className="ml-2 mt-2">Calendar View</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🎯 <span className="ml-2 mt-2">Goals</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🏆 <span className="ml-2 mt-2">Milestones</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            ⏱️ <span className="ml-2 mt-2">Time tracking</span>
            </span>
          </Link>
             
            </div>
          </div>
        );
      case 'Integrations':
        return (
          <div className="grid grid-cols-3 gap-x-44">
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🛠️ <span className="ml-2 mt-2">ClickUp API</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💼 <span className="ml-2 mt-2">Salesforce</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📊 <span className="ml-2 mt-2">Hubspot</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🛠️ <span className="ml-2 mt-2">Zendesk</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🤖 <span className="ml-2 mt-2">Zapier</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🔧 <span className="ml-2 mt-2">Make</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📋 <span className="ml-2 mt-2">Trello</span>
            </span>
          </Link>
            </div>
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💬 <span className="ml-2 mt-2">Slack</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📁 <span className="ml-2 mt-2">Gsuite</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📦 <span className="ml-2 mt-2">Dropbox</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📹 <span className="ml-2 mt-2">Zoom</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📹 <span className="ml-2 mt-2">Loom</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💼 <span className="ml-2 mt-2">Microsoft Teams</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📅 <span className="ml-2 mt-2">Calendly</span>
            </span>
          </Link>
              
            </div>
            <div className="space-y-2">
            <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            📊 <span className="ml-2 mt-2">Jira</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🎨 <span className="ml-2 mt-2">Figma</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💻 <span className="ml-2 mt-2">Github</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💻 <span className="ml-2 mt-2">Gitlab</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            💻 <span className="ml-2 mt-2">Bitbucket</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            ⚠️ <span className="ml-2 mt-2">Sentry</span>
            </span>
          </Link>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
            🕒 <span className="ml-2 mt-2">Toggl</span>
            </span>
          </Link>
              
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  
  

  const renderSolutions = () => {
    switch (isSelected) {
      case 'Team':
        return (
          <div className="grid grid-cols-3 gap-2 gap-x-52 p-4">
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Project Management</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Empower teams to achieve goals with efficient, clear project planning.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Product Development</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Accelerate innovation for faster, effective team-led product launches.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Operations</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Optimize workflows for increased team productivity and efficiency.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">IT</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Improve IT operations with solutions fostering teamwork and efficiency.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Marketing</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Drive marketing outcomes through collaborative strategy and teamwork.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Human Resources</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Enhance team engagement and efficiency with streamlined processes.</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow w-40 h-44">
              <h3 className="font-semibold text-gray-700 mb-2">Sales</h3>
              <p className="text-gray-500 text-sm overflow-hidden">Maximize sales with tools enhancing team efficiency and insight.</p>
            </div>
          </div>
        );
      case 'Company Type':
        return <h1></h1>;
      case 'Templates':
        return <h1></h1>;
      default:
        return null;
    }
  };
    
  const renderResourcesDropdown = () => {
    return (
      <div className="grid grid-cols-3 gap-x-2 p-1">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Learn</h3>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📚 <span className="ml-2">University</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🖥️ <span className="ml-2">Demos</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🎥 <span className="ml-2">Video tutorials</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📅 <span className="ml-2">Webinars</span>
            </span>
          </Link>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Discover</h3>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              📝 <span className="ml-2">Blog</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              👥 <span className="ml-2">Customer stories</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🌐 <span className="ml-2">Virtual Summits</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🧩 <span className="ml-2">Productivity quiz</span>
            </span>
          </Link>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Services</h3>
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🤝 <span className="ml-2">Partner services</span>
            </span>
          </Link><br />
          <Link href="#">
            <span className="flex items-center text-gray-500 hover:text-gray-900">
              🛠️ <span className="ml-2">Professional services</span>
            </span>
          </Link>
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
      <div className="relative block p-2 px-8 rounded-full max-w-lg  
             border border-gray-200">
        <div className="hidden md:flex space-x-3">
        <button
            onClick={toggleProductDropdown}
            className="flex items-center text-gray-600 hover:text-gray-900 "
          >
            Product
            <MdArrowDropDown className={`ml-1 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={toggleSolutionsDropdown}
            className="flex items-center text-gray-600 hover:text-gray-900 "
          >
            Solutions
            <MdArrowDropDown className={`ml-1 transition-transform ${isSolutionsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={toggleResourcesDropdown}
            className="flex items-center text-gray-600 hover:text-gray-900 "
          >
            Resources
            <MdArrowDropDown className={`ml-1 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
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
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-3 p-6 grid grid-cols-4 gap-x-12 w-[750px] z-10">
            {/* Left column with buttons */}
            <div className="flex flex-col space-y-4 items-start">
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Capabilities' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Capabilities')}
              >
                Capabilities
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'All Features' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('All Features')}
              >
                All Features
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Integrations' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Integrations')}
              >
                Integrations
              </button>
            </div>

            {/* Right columns showing products based on the selected section */}
            <div className="grid grid-cols-3 gap-x-12">
              {renderProducts()}
            </div>
          </div>
        )}

        {/* Solutions Dropdown */}
        {isSolutionsDropdownOpen && (
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 grid grid-cols-4 gap-x-12 w-[850px] z-10">
            {/* Left column with buttons */}
            <div className="flex flex-col space-y-4 items-start">
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Team' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Team')}
              >
                Team
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Company type' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Company type')}
              >
                Company type
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${selectedSection === 'Templates' ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-300`}
                onClick={() => handleSectionClick('Templates')}
              >
                Templates
              </button>
            </div>

            {/* Right columns showing products based on the selected section */}
            <div className="grid grid-cols-3 gap-x-12">
              {renderSolutions()}
            </div>
          </div>
        )}

        {/* Resources Dropdown */}
        {isResourcesDropdownOpen && (
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 w-[700px] z-10">
            {renderResourcesDropdown()}
          </div>
        )}
      </div>

      {/* Section 3: Contact Sales */}
      <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2">
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900">Contact Sales</span>
        </Link>
      </div>

      {/* Section 4: Login and Sign-Up */}
      <div className="flex items-center space-x-4">
        <Link href="#">
          <span className="border border-gray-200 rounded-full px-4 py-2 text-gray-600 hover:text-gray-900">Log In</span>
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