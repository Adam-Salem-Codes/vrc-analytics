"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
const placeholders = [
  "Don't worry, no authentication is required,",
  "Just enter a team number to save as the default."
];

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  window.location.href = "/teams/" + e.currentTarget[0].value + "/dashboard";
};
export default function Login() {
  return (
    <main className="w-full h-[100vh] bg-[#141414]">
      <div className="w-full h-[100%] flex justify-center items-center">
        <div className="text-center text-gray-500 flex-col dark w-[25vw] min-w-[20vw]">
          <h1 className="text-7xl p-12">Login</h1>
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
