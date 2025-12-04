"use client"
import Link from "next/Link"
import { usePathname } from "next/navigation"

type AdminRouteProps ={
    Link: {
        url: string;
        text: string;
        blank: boolean;
    }
}


export default function AdminRoute({Link}: AdminRouteProps){
    const pathname = usePathname()
    const isActive = pathname.startsWith(Link.url)

    return (
        <Link
        className={'${isActive ? 'bg-amber-400' : ''} 'font-bold text-lg  border-t border-gray-200 p-3 last-of-type:border-b'}
        href={Link.url}
        target={Link.blank ? '_blank' : ''}
        >{Link.text}</Link>
    )
}