"use client";
import { BiMenu } from "react-icons/bi";
import { useState, useCallback } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);
  return (
    <div className="relative">
      {" "}
      <div className="flex flex-row text-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home{" "}
        </div>

        <div
          className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer "
          onClick={toggleOpen}
        >
          <BiMenu size={24} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Log In" />
              <MenuItem onClick={() => {}} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
