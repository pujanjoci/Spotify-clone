import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href = "#", // default href to "#" if not provided
}) => {
    return ( 
        <Link href={href} className={twMerge(`
            flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-700 py-1
            `,
            `
            ${active ? 'text-white' : ''}
        `)}>
            <Icon />
            {label}
        </Link>
    );
}
 
export default SidebarItem;
