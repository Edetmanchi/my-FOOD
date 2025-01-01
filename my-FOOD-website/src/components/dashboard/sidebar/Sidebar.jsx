"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;







"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;





"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


"use client"
import React, { useState } from 'react';
import SidebarBtn from './SidebarBtn';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (text) => {
    setActiveButton(text);
  };

  return (
    <div className={`flex h-screen overflow-hidden justify-center items-center fixed ${darkMode ? 'dark' : ''}`}>
      <div className={`w-64 border-slate-200 bg-gray-200 h-screen flex flex-col transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50`}>
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href='/dashboard'> 
            <Image src="/logo.png" alt="logo" width={70} height={20} />
          </Link>
          <button onClick={toggleDarkMode} className="text-gray-300 hover:text-gray-500 focus:outline-none">
            <svg id="darkModeIcon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={darkMode ? "M21 12.79A9 9 0 1111.21 3H12a9 9 0 000 18h.79A9 9 0 0121 12.79z" : "M12 3v2m0 14v2m7.071-7.071l-1.414 1.414M4.929 4.929l1.414 1.414M21 12h-2M5 12H3m16.071 4.071l-1.414-1.414M4.929 19.071l1.414-1.414"}></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow px-4 mt-4">
          {['Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports'].map((text, index) => (
            <SidebarBtn
              key={index}
              icon="fa-reply-all"
              text={text}
              isActive={activeButton === text}
              onClick={() => handleButtonClick(text)}
            />
          ))}
        </nav>
        <div className="px-8 py-4 mt-auto flex items-center">
          <img src="https://via.placeholder.com/32" className="w-8 h-8 rounded-full" alt="User" />
          <span className="ml-4">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

