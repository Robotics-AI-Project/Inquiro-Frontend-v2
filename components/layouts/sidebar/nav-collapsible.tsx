"use client";

import { Button } from "@/components/ui/button";
import {
  Database,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="flex flex-col space-y-1">
      <Button
        className="group text-white w-full justify-between py-6 px-5 font-medium"
        variant="ghost"
        onClick={handleMainButtonClick}
      >
        <div className="flex space-x-3">
          {Icon && (
            <Icon
              size={22}
              className="group-hover:scale-110 transition-all duration-200 ease-out"
            />
          )}
          <p className="text-base">{label}</p>
        </div>
        {hasChildren && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ChevronUp size={22} />
          </motion.div>
        )}
      </Button>
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            className="flex flex-col space-y-2 ml-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 * nav.length + 0.025, ease: "easeOut" }}
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.05 * (i + 1) }}
              >
                <Button
                  className="text-white w-full justify-between px-6 font-medium"
                  variant="ghost"
                >
                  <p className="text-base">{item.label}</p>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
