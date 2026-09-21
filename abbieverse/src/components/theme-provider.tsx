"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        document.documentElement.classList.add("dark");

        return () => {
            document.documentElement.classList.remove("dark");
        };
    }, []);

    return <>{children}</>;
}