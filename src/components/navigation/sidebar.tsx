import React from "react";
import {
  FcDepartment,
  FcElectronics,
  FcFilingCabinet,
  FcHome,
  FcList,
  FcShipped,
} from "react-icons/fc";
import { SIDEBAR_PATHS } from "../../enums/PATHS";

type sidebarLinkType = {
  name: Partial<SIDEBAR_PATHS>;
  icon: JSX.Element;
};

const sidebarLinks: Array<sidebarLinkType> = [
  {
    name: SIDEBAR_PATHS.ALL,
    icon: <FcList size={24} />,
  },
  {
    name: SIDEBAR_PATHS.TRANSPORT,
    icon: <FcShipped size={24} />,
  },
  {
    name: SIDEBAR_PATHS.REAL_ESTATE,
    icon: <FcDepartment size={24} />,
  },
  {
    name: SIDEBAR_PATHS.ELECTRONICS,
    icon: <FcElectronics size={24} />,
  },
  {
    name: SIDEBAR_PATHS.FOR_HOME,
    icon: <FcHome size={24} />,
  },
  {
    name: SIDEBAR_PATHS.CLOTHES,
    icon: <FcFilingCabinet size={24} />,
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: 240 }}>
      <nav>
        <ul>
          {sidebarLinks.map((link) => (
            <li
              className={
                "flex items-center space-x-2 text-md hover:bg-gray-200 group p-2 transition-colors duration-300 cursor-pointer rounded-md"
              }
            >
              <span>{link.icon}</span>{" "}
              <p className={"group-hover:text-primary-600"}>{link.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
