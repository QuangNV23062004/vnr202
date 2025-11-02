import { Menu, Settings, SquarePen } from "lucide-react";
import React from "react";

export default function SideBar({
  setIsOpen,
  clearable,
  onClearMessages,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clearable: boolean;
  onClearMessages?: () => void;
}) {
  return (
    <>
      <button
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>
      <button
        className={`text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors ${
          clearable
            ? "opacity-100 cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={clearable && onClearMessages ? onClearMessages : undefined}
      >
        <SquarePen size={20} />
      </button>
      <div className="flex-1" />
      <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors">
        <Settings size={20} />
      </button>
    </>
  );
}
