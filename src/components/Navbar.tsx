"use client";

import { FloatingNav } from "../components/ui/floating-navbar";
import React, { useState } from "react";
import Link from "next/link";
import { Wrench } from "lucide-react";
import "./glass.css";

export default function Navbar() {
  return (
    <div className="fixed bg-transparent w-full h-[48px] flex justify-center items-center z-50">
      <div className="h-full w-fit px-12 rounded-3xl border  mt-12 card flex items-center text-white">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full items-center">
            <div className="flex items-center">
              <a href="/" className="mx-6 flex items-center mr-12 hover:text-primary duration-500">
                <h1 className="ml-2">VRC Tools</h1>
              </a>
            </div>
            <nav className="flex justify-center space-x-12">
              <Link href="/search" className="hover:text-primary duration-500">Search</Link>

              <Link href="/about" className="hover:text-primary duration-500">About</Link>

              <Link href="/contact" className="hover:text-primary duration-500">Contact</Link>

              <Link href="/sponsorship" className="hover:text-primary duration-500">Sponsorship</Link>

            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
