import React from "react";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-2xl w-full">
      <input
        type="text"
        placeholder="Search notes"
        className="bg-transparent outline-none flex-1 text-base"
      />
      <svg
        className="w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        />
      </svg>
    </div>
  );
}
