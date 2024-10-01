"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Capabilities'); // Default selected section is Capabilities

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleSectionClick = (section:any) => {
    setSelectedSection(section); // Set the selected section when a button is clicked
  };

  const renderProducts = () => {
    switch (selectedSection) {
      case 'Capabilities':
        return (
          <>
          <div className="grid grid-cols-3 gap-4">
           <div className="space-y-2">
              <h3 className="font-semibold">Project Management</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Tasks</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Portfolios</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Board views</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Gantt charts</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Product Development</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Sprints</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Sprint Reports</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Kanban</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Roadmap & Backlog</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Knowledge Management</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Wikis</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Ask AI</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Connected search</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Resource Management</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Time Tracking</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Workload views</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Goals</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Dashboards</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Collaboration</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Whiteboards</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Chat</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Inbox</span></Link>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Workflow</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Automations</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Forms</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Custom fields</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Custom statuses</span></Link>
            </div>
            </div>
          </>
        );
      case 'All Features':
        return (
          <>
            <div className="space-y-2">
           
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Tasks</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Docs</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Chat</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">AI</span></Link>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Mind maps</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Custom fields</span></Link><br />
              </div>
              <div className="space-y-2">
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Whiteboards</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Dashboards</span></Link>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Gantt</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Proofing</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Email</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Pulse</span></Link>
              </div>
              <div className="space-y-2">
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Automations</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Calender View</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Goals</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Milestones</span></Link>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Time tracking</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Time estimates</span></Link><br />
              </div>
              <div className="space-y-2">
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Forms</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Kanban view</span></Link>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Sprints</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Clips</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Connected search</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Reminders</span></Link>
              
              </div>
          </>
        );
      case 'Integrations':
        return (
          <>
            <div className="space-y-2">
              <h3 className="font-semibold">Integrations</h3>
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Slack</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Google Drive</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Jira</span></Link><br />
              <Link href="#"><span className="text-gray-600 hover:text-gray-900">Zapier</span></Link>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Section 1: ClickUp Logo and Text */}
      <div className="flex items-center space-x-2 border border-gray-300 rounded-2xl px-12 py-1 ml-4 lg:ml-36 w-[250px] h-[50px]">
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
          <Link href="#">
            <span className="text-gray-600 hover:text-gray-900">Solutions</span>
          </Link>
          <Link href="#">
            <span className="text-gray-600 hover:text-gray-900">Resources</span>
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
          <div className="absolute bg-white shadow-lg border border-gray-300 rounded-lg mt-2 p-4 grid grid-cols-2 gap-4 w-[900px] z-10">
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
            <div className="grid grid-cols-2 gap-4">
              {renderProducts()}
            </div>
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
