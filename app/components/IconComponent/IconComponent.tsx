"use client"
import React, { useState } from "react";

const IconsRow = () => {
  const icons = [
    { name: "Time tracking", icon: "⏱️", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/4wAksykEXI9A9mopHjwVrW/b1666501082c28b646bc14baebaae449/home-tabs-v3-time-tracking-desktop.png" }, 
    { name: "Docs", icon: "📄", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/3YsUrx3kjM6cjoAt3rzChz/f80e8bcd3eb4e7f64d56594a01e128ea/home-tabs-v3-docs-desktop.png" },
    { name: "Dashboards", icon: "📊", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/B1bl0EQkre11BQitwKTP9/784202f36402c2192692fa6a43edd6d3/home-tabs-v3-dashboards-desktop.png" },
    { name: "Sprints", icon: "🏃‍♂️", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/56uigUiCzqtRzAMTOffFR1/b6cd112d5f946075b481792e7662cc2c/home-tabs-v3-sprints-desktop.png" },
    { name: "Whiteboards", icon: "📝", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/5qG4mKVGLgiThoEUoJYtaL/f91b7f249852370a2e1abdc69fd45715/home-tabs-v3-whiteboards-desktop.png" },
    { name: "Projects", icon: "📁", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png" },
    { name: "Chat", icon: "💬", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png" },
    { name: "Forms", icon: "📝", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/274lHEQGIABlSHkVj3ReSu/0ac58ee0909108ce794e4073f2c84a98/home-tabs-v3-forms-desktop.png" },
    { name: "Automations", icon: "⚡", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/2B8vjy74uC2619STFNvRKb/703aeb4037b7fcf27491bbccbfa609c4/home-tabs-v3-automations-desktop.png" },
    { name: "Goals", icon: "🎯", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/2BLakXXrUPYfN2xwFHHuO8/e56e139d4c3916ac9d6378548f2a67c5/home-tabs-v3-goals-desktop.png" },
    { name: "AI", icon: "✨", imageUrl: "https://images.ctfassets.net/w8fc6tgspyjz/5OjCrhFa8adtz2NyfMrThA/1b88fb873764e8ab68e13c59c984beb6/home-tabs-v3-ai-desktop.png" },
  ];

  const [activeIcon, setActiveIcon] = useState(icons[0]); // Default is the first icon

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
      {/* Icons Row */}
      <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 p-6 rounded-xl">
        <div className="flex space-x-8">
          {icons.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIcon(item)}
              className={`flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out cursor-pointer ${activeIcon.name === item.name ? 'text-indigo-600' : ''}`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Display */}
      <div className="bg-white border-4 border-purple-300 rounded-xl p-4 w-full max-w-4xl">
        <img 
          src={activeIcon.imageUrl} 
          alt={activeIcon.name} 
          className="w-full object-cover rounded-lg" 
        />
      </div>
    </div>
  );
};

export default IconsRow;
