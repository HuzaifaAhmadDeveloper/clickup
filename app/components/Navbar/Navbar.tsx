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
  const [isSelected, issetSelected] = useState('Team');

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
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Tasks</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Portfolios</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Board views</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Gantt charts</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Product Development</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Sprints</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Sprint Reports</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Kanban</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Roadmap & Backlog</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Knowledge Management</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Wikis</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Ask AI</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Connected search</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Resource Management</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Time Tracking</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Workload views</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Goals</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Dashboards</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Collaboration</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Whiteboards</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Chat</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Inbox</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Workflow</h3>
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Automations</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Forms</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Custom fields</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Custom statuses</span></Link>
            </div>
          </div>
        );
      case 'All Features':
        return (
          <div className="grid grid-cols-3 gap-x-44">
            <div className="space-y-2">
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Tasks</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Chat</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">AI</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Mind maps</span></Link>
            </div>
            <div className="space-y-2">
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Whiteboards</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Dashboards</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Gantt</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Proofing</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Email</span></Link>
            </div>
            <div className="space-y-2">
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Automations</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Calendar View</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Goals</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Milestones</span></Link><br />
              <Link href="#"><span className="text-gray-500 hover:text-gray-900">Time tracking</span></Link>
            </div>
          </div>
        );
      case 'Integrations':
        return (
          <div className="grid grid-cols-3 gap-x-44">
          <div className="space-y-2">
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">ClickUp API</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Salesforce</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Hubspot</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Zendesk</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Zapier</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Make</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Trello</span></Link><br />
            
          </div>
          <div className="space-y-2">
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Slack</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Gsuite</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Dropbox</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Zoom</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Loom</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Microsoft Teams</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Calendly</span></Link>
          </div>
          <div className="space-y-2">
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Jira</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Figma</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Github</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Gitlab</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Bitbuket</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Sentry</span></Link><br />
            <Link href="#"><span className="text-gray-500 hover:text-gray-900">Toggl</span></Link>
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
      <div className="grid grid-cols-3 gap-x-10 p-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Learn</h3>
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">University</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Demos</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Video tutorials</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Webinars</span></Link>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Discover</h3>
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Blog</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Customer stories</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Virtual Summits</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Productivity quiz</span></Link>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Services</h3>
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Partner services</span></Link><br />
          <Link href="#"><span className="text-gray-500 hover:text-gray-900">Professional services</span></Link>
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
          <Link href="#" className='flex items-center'>
            <span className="text-gray-600 hover:text-gray-900">Solutions</span><MdArrowDropDown />
          </Link>
          <Link href="#" className='flex items-center'>
            <span className="text-gray-600 hover:text-gray-900">Resources</span><MdArrowDropDown />
          </Link>
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
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 grid grid-cols-4 gap-x-12 w-[1000px] z-10">
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
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-6 w-[1000px] z-10">
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