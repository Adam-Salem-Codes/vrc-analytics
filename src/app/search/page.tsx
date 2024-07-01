"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
const placeholders = [
  "2072A",
  "2072 (organization)",
  "Virginia (region)",
  "Mall of America (event)"
];
const words = ["team", "organization", "region", "event"];

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (/^[a-zA-Z]+$/.test(e.currentTarget[0].value)) window.location.href = "/region/" + e.currentTarget[0].value;
  else if (/^\d+$/.test(e.currentTarget[0].value)) window.location.href = "/organizations/" + e.currentTarget[0].value;
  else if (/^[A-Za-z\s]*$/.test(e.currentTarget[0].value) && !/^\d+$/.test(e.currentTarget[0].value)) window.location.href = "/events/" + e.currentTarget[0].value;
  else window.location.href = "/teams/" + e.currentTarget[0].value + "/dashboard";

  
};
export default function page() {
  return (
    <main className="w-full h-[100vh] bg-[#141414]">
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="text-center text-gray-500 flex-col dark">
          <h1 className="text-7xl p-12">Search your <FlipWords words={words} className="text-gray-500"/>.</h1>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={e => {}}
            onSubmit={onSubmit}
            
          />
        </div>
      </div>
    </main>
  );
}
