"use client";

import { useState, useEffect } from "react";

export default function Organizations() {
  const [organization, setOrganization] = useState<string>("");
  return (
    <main className="w-full h-[100vh] bg-[#141414]">
      <h1>
        Must have organization id in URL.
      </h1>
    </main>
  );
}