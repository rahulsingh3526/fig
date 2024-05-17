import Link from "next/link";
import React, { ReactNode } from "react";

interface SideLayoutProps {
  children: ReactNode;
}

const Sidebar: React.FC<SideLayoutProps> = ({ children }) => {
  return <div className="flex"></div>;
};

export default Sidebar;
