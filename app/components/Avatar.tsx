
import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src="/avatar.jpg"
      alt="Avatar"
    />
  );
};

export default Avatar;
