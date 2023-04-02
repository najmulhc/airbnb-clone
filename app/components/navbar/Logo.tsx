"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/logo.png"
    />
  );
};

export default Logo;
