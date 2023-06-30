import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Add-Flight",
    path: "/dashboard/add-flight",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 4,
    name: "All-Flights_List",
    path: "/dashboard/all-flights",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
];
