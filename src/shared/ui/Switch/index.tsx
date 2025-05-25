"use client";

import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = ({ checked = false, onChange }: SwitchProps) => {
  const [isOn, setIsOn] = useState(checked);

  const toggle = () => {
    setIsOn(!isOn);
    onChange?.(!isOn);
  };

  return (
    <div
      onClick={toggle}
      className={`w-11 h-6 flex items-center rounded-full cursor-pointer transition-colors
        ${isOn ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
          ${isOn ? "translate-x-6" : "translate-x-1"}`}
      />
    </div>
  );
};
