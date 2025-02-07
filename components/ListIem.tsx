"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemsProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemsProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
        // Added authentication before push
        router.push(href);
    }
    return ( 
        <button 
        onClick={onClick}
        className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image 
                    className="object-cover"
                    fill
                    src={image}
                    alt="Image"
                />
            </div>
            <p className="font-medium trucate py-5">
                {name}
            </p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center right-3 bg-green-500 hover:bg-green-600 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-neutral-800 opacity-60" />
            </div>
        </button>
     );
}
 
export default ListItem;