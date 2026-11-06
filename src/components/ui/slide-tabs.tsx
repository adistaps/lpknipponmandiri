"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

export const SlideTabs = ({
    links,
}: {
    links: readonly (readonly [string, string])[]
}) => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }}
            /* bg-transparent menghapus kapsul abu-abu di tengah */
            className="relative flex w-fit items-center rounded-full bg-transparent p-1"
        >
            {links.map(([label, id]) => (
                <Tab key={id} setPosition={setPosition} href={`#${id}`}>
                    {label}
                </Tab>
            ))}

            <Cursor position={position} />
        </ul>
    )
}

const Tab = ({
    children,
    setPosition,
    href,
}: {
    children: React.ReactNode
    setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>
    href: string
}) => {
    const ref = useRef<HTMLLIElement>(null)

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return
                const { width } = ref.current.getBoundingClientRect()
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
            }}
            className="relative z-10 block cursor-pointer"
        >
            <a
                href={href}
                /* Warna font disesuaikan ke gelap (text-slate-700 -> hover:text-slate-950) agar terbaca jelas */
                className="block px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:text-slate-950 sm:text-sm uppercase tracking-tight"
            >
                {children}
            </a>
        </li>
    )
}

const Cursor = ({
    position,
}: {
    position: { left: number; width: number; opacity: number }
}) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            /* Sorotan saat di-hover dibuat samar/halus (bg-slate-100) */
            className="absolute z-0 h-9 rounded-full bg-slate-100"
        />
    )
}