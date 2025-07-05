"use client";

import { cn } from "@/lib/utils";

import styles from "./spinner.module.css";

interface SpinnerProps {
  width?: number;
  color?: string;
}

export const Spinner = ({ width = 22, color = "#fff" }: SpinnerProps) => {
  return (
    <span
      className={cn(styles.loader)}
      style={{
        width: `${width}px`,
        height: `${width}px`,
        color,
      }}
    ></span>
  );
};
