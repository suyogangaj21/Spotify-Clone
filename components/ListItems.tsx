"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemsProps {
  image: string;
  name: string;
  href: string;
}
const ListItems: React.FC<ListItemsProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick=()=>{
    //Add auth
    router.push(href);
  }
  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 " onClick={onClick}>
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="Image" className="objext-cover" fill />
      </div>
      <p className="font-medium  py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex item-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItems;
