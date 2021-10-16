import React, { Fragment } from "react";
import {
  FcDepartment,
  FcElectronics,
  FcFilingCabinet,
  FcHome,
  FcList,
  FcNext,
  FcShipped,
} from "react-icons/fc";
import { IoCarSharp, IoNewspaper } from "react-icons/io5";
import { SIDEBAR_PATHS } from "../../enums/PATHS";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlinePedalBike } from "react-icons/all";

type sidebarLinkType = {
  name: Partial<SIDEBAR_PATHS>;
  icon: JSX.Element;
  next: JSX.Element;
  links: Array<{ name: string; icon: JSX.Element }>;
};

const sidebarLinks: Array<sidebarLinkType> = [
  {
    name: SIDEBAR_PATHS.ALL,
    icon: <FcList size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} />,
      },
    ],
  },
  {
    name: SIDEBAR_PATHS.TRANSPORT,
    icon: <FcShipped size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} className={"text-deep-500"} />,
      },
      {
        name: "Автозапчасти и аксессуары",
        icon: <IoNewspaper size={18} className={"text-deep-500"} />,
      },
      {
        name: "Мотоциклы и мопеды",
        icon: <MdOutlinePedalBike size={18} className={"text-deep-500"} />,
      },
    ],
  },
  {
    name: SIDEBAR_PATHS.REAL_ESTATE,
    icon: <FcDepartment size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} />,
      },
    ],
  },
  {
    name: SIDEBAR_PATHS.ELECTRONICS,
    icon: <FcElectronics size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} />,
      },
    ],
  },
  {
    name: SIDEBAR_PATHS.FOR_HOME,
    icon: <FcHome size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} />,
      },
    ],
  },
  {
    name: SIDEBAR_PATHS.CLOTHES,
    icon: <FcFilingCabinet size={24} />,
    next: <FcNext size={16} />,
    links: [
      {
        name: "Автомобили",
        icon: <IoCarSharp size={18} />,
      },
    ],
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className={"w-2/12"}>
      <nav>
        {sidebarLinks.map((link, index) => (
          <Menu as={"div"} className={"relative"} key={index}>
            <Menu.Button
              className={
                "flex items-center justify-between w-full text-md hover:bg-gray-100 group p-2 transition-colors duration-300 cursor-pointer rounded-md"
              }
            >
              <div className="space-x-2 flex items-center">
                <span>{link.icon}</span>{" "}
                <p className={"group-hover:text-primary-600"}>{link.name}</p>
              </div>
              <span
                className={
                  "transform transition-transform -translate-x-1 group-hover:translate-x-0"
                }
              >
                {link.next}
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200 transform"
              enterFrom="opacity-0 -translate-x-2"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-200 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-2"
            >
              <Menu.Items className="absolute ml-2 w-80 left-full top-0 bg-white rounded-md border p-2 border-gray-200 focus:outline-none">
                <p
                  className={"text-gray-500 text-xs font-light select-none p-2"}
                >
                  {link.name}
                </p>
                {link.links.map((link, index) => (
                  <Menu.Item as="li" className={"list-none"} key={index}>
                    {({ active }) => (
                      <button
                        className={`${
                          active && "bg-gray-100"
                        } flex items-center space-x-2 p-2 w-full rounded-md text-gray-500`}
                      >
                        <span>{link.icon}</span>
                        <p className={`${active && "text-primary-600"}`}>
                          {link.name}
                        </p>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        ))}
      </nav>
    </aside>
  );
};
