import React from "react";
import { useContext, useRef, useEffect } from "react";
import { SalesDropDown } from "../SvgComponents/SVG";
import { SidebarContext } from "../../context/sidebarContext";
import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaFile } from "react-icons/fa6";
import { MdChatBubble } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { sidebar } = useContext(SidebarContext);
  const [openSideBar, setOpenSideBar] = sidebar;
  const sidebarRef = useRef();
  const location = useLocation();

  const navigation = [
    {
      Name: "Home",
      Link: "/",
      icon: <RiHome2Fill className="h-8 w-8 mr-4" />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : "",
          color: isActive ? "#0094B6" : "#969CBA",
        };
      },
    },
    {
      Name: "Dashboard",
      Link: "/dashboard",
      icon: <RiBarChart2Fill className="h-8 w-8 mr-4" />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : "",
          color: isActive ? "#0094B6" : "#969CBA",
        };
      },
    },
    {
      Name: "Earnings",
      Link: "/earnings",
      icon: <FaFile className="h-6 w-8 mr-4" />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : "",
          color: isActive ? "#0094B6" : "#969CBA",
        };
      },
    },
    {
      Name: "Chat",
      Link: "/chat",
      icon: <MdChatBubble className="h-8 w-8 mr-4" />,
      navLinkStyles: ({ isActive }) => {
        return {
          backgroundColor: isActive ? "#fff" : "",
          color: isActive ? "#0094B6" : "#969CBA",
        };
      },
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSideBar(!openSideBar);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(()=> {
      setOpenSideBar(!openSideBar)
  },[location.pathname])


  return (
    <div>
      <div className={`hidden sm:w-[70px] sm:flex flex-col transition-all duration-300 ease-in-out h-full bg-[#373B53]`}>
        <div className="h-[92%] flex flex-col items-center space-y-20">
          <div className="mt-6 p-2">
            <img src="assets/navbar/Logo.png" alt="logo" />
          </div>
          <div className="w-full flex flex-col gap-4 justify-end items-end">
            {navigation.map((item, key) => (
              <NavLink
                key={key}
                to={item.Link}
                className={`cursor-pointer hover:bg-white hover:text-[#0094B6] px-2 rounded-l-lg w-5/6 py-4 flex justify-center`}
                style={item.navLinkStyles}
                end
              >
                {item.icon}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="h-[120px] border border-t border-[#494E67] flex flex-col justify-end items-center ">
          <p className=" mb-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
            Help
          </p>
          <div className="flex mb-10 ml-1 items-center gap-1">
            <p className="mt-[10px] font-heebo text-[18px] text-[#6F809E] not-italic font-normal leading-3 tracking-[0.18px]">
              EN
            </p>
            <SalesDropDown />
          </div>
        </div>
      </div>

      {/* sidebar for small screen */}
      <aside ref={sidebarRef} className={`${openSideBar ? "-translate-x-full" : "translate-x-0"} duration-300 ease-in-out block sm:hidden fixed top-0 left-0 z-40 w-52 h-screen transition-transform`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#373B53]">
          <a className="flex items-center gap-4 ps-2.5 mb-5">
            <HiOutlineMenuAlt2 onClick={() => setOpenSideBar(!openSideBar)} className="h-10 w-10 text-white cursor-pointer hover:border hover:border-gray-100/50 transition duration-300 p-1 rounded-md" /> <img src="assets/navbar/Logo.png" alt="Flowbite Logo" />
          </a>
          <ul className="space-y-6 font-medium pt-10">
            {navigation.map((item, key) => (
              <NavLink
                key={key}
                to={item.Link}
                className={`cursor-pointer transition duration-300 font-heebo items-center hover:bg-white hover:text-[#0094B6] px-2 rounded-lg w-full py-4 flex justify-start`}
                style={item.navLinkStyles}
                end
              >
                {item.icon} {item.Name}
              </NavLink>
            ))}
          </ul>
        </div>
      </aside>
    </div>


  );
}
