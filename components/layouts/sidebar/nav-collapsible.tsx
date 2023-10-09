"use client";

import { Button } from "@/components/ui/button";
import {
  Database,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
} from "lucide-react";
import React, { useState } from "react";

type NavItemProps = {
  icon?: React.ElementType;
  label: string;
  nav: string | NavItemProps[];
};

const NavItem = ({ nav, label, icon }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = icon;

  const hasChildren = Array.isArray(nav);

  const handleMainButtonClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="flex flex-col space-y-1 ">
      <Button
        className="text-white w-full justify-between py-6 px-5 font-medium"
        variant="ghost"
        onClick={handleMainButtonClick}
      >
        <div className="flex space-x-3">
          {Icon && <Icon size={22} />}
          <p className="text-base">{label}</p>
        </div>
        {hasChildren && (
          <>
            {!isOpen && <ChevronUp size={22} />}
            {isOpen && <ChevronDown size={22} />}
          </>
        )}
      </Button>
      {hasChildren && isOpen && (
        <div className="flex flex-col space-y-2 ml-8">
          {nav.map((item) => (
            <Button
              key={item.label}
              className="text-white w-full justify-between px-6 font-medium"
              variant="ghost"
            >
              <div className="flex space-x-3">
                <p className="text-base">{item.label}</p>
              </div>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavCollapsible = () => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <NavItem
        nav={[
          {
            label: "Add Data Source",
            nav: "/datasource/add",
          },
          {
            label: "Your Data Source",
            nav: "/datasource",
          },
        ]}
        label="Data Source"
        icon={Database}
      />
      <NavItem
        nav="/dashboard"
        label="Data Dashboards"
        icon={LayoutDashboard}
      />
    </div>
  );
};

export default NavCollapsible;
