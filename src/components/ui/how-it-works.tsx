"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

interface CardProps {
    number: string;
    title: string;
    description?: string;
    colorTheme?: "teal" | "amber" | "emerald" | "orange" | "mono";
    className?: string;
    rotate?: string;
}

const Pin = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
    </svg>
);

export const StepCard = ({
    number,
    title,
    description,
    colorTheme = "mono",
    className = "",
    rotate = "",
}: CardProps) => {
    const themeStyles = {
        mono: {
            bg: "bg-slate-50 dark:bg-zinc-900/40",
            text: "text-black dark:text-white",
            pin: "text-black dark:text-white",
            border: "border-zinc-300 dark:border-zinc-700",
        },
        teal: {
            bg: "bg-blue-50/80 dark:bg-blue-950/30",
            text: "text-[#0b192c]",
            pin: "text-[#ccff00]",
            border: "border-blue-200/60 dark:border-blue-800/40",
        },
        amber: {
            bg: "bg-amber-50/80 dark:bg-amber-950/30",
            text: "text-amber-900",
            pin: "text-[#f6c85f]",
            border: "border-amber-200/60 dark:border-amber-800/40",
        },
        emerald: {
            bg: "bg-emerald-50/80 dark:bg-emerald-950/30",
            text: "text-emerald-950",
            pin: "text-emerald-500",
            border: "border-emerald-200/60 dark:border-emerald-800/40",
        },
        orange: {
            bg: "bg-orange-50/80 dark:bg-orange-950/30",
            text: "text-orange-950",
            pin: "text-orange-500",
            border: "border-orange-200/60 dark:border-orange-800/40",
        },
    };

    const currentTheme = themeStyles[colorTheme];

    return (
        <div
            className={`relative w-full transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
        >
            <div className="bg-white dark:bg-neutral-900 p-2 rounded-[22px] shadow-[0px_8px_18px_0px_rgba(0,0,0,0.06)] border border-neutral-100 dark:border-neutral-800">
                <Pin className={`w-6 h-6 ${currentTheme.pin} z-20 mb-3 mx-auto`} />
                <div
                    className={`${currentTheme.bg} border ${currentTheme.border} rounded-[14px] p-4 min-h-[140px] flex flex-col justify-between relative overflow-hidden`}
                >
                    <span
                        className={`${currentTheme.pin} text-3xl font-bold tracking-tight mb-2`}
                        style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
                    >
                        {number}
                    </span>
                    <h3 className={`text-[11px] sm:text-xs font-bold uppercase leading-tight tracking-tight ${currentTheme.text}`}>
                        {title}
                    </h3>
                    {description && (
                        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};