import React from "react";

interface ChipsProps {
  children: React.ReactNode;
  color?: string;
}

function Chips({ children, color = "red" }: ChipsProps) {
  return <span className={`bg-${color} text-white  font-bold text-xs  me-2 px-2.5 py-1 rounded-full`}>{children}</span>;
}

export default Chips;
