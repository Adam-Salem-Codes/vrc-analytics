"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import { Coffee } from "lucide-react";

export default function About() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#141414] overflow-x-hidden pt-12">
      <div className="pt-12 text-center w-full">
        <h1 className="text-white text-8xl text-center hover:text-primary duration-200">About</h1>
      </div>
      <div className="w-[100vw] h-[100%] flex flex-col justify-center items-center text-white text-xl">
        <p className="w-[50%] indent-5 hover:text-primary duration-200">
          Hello! My name is Adam Salem and I made this website to help
          VRC teams. My goal with this site was to improve upon currently
          existing websites VRC teams rely on. Hopefully this website helps
          common issues when scouting teams such as slow loading times and
          outdated data. I also created this website to learn more about
          different web development technologies. This website is one of my most
          ambitious projects. I hope you enjoy and if you have found use for
          this website, please consider donating to help me maintain it. I am currently paying
          for this website with my own money to help people. In the future I hope to apply for 
          google ads to get some support for the work that I have done.
        </p>
        <div className="mt-24">
          <a href="https://ko-fi.com/adamsalem" target="_blank">
            <PinContainer
              title="https://ko-fi.com/adamsalem"
              href="https://ko-fi.com/adamsalem"
              className="w-[300px] flex"
            >
              <p className="w-[85%] hover:text-primary duration-200">Buy me a coffee</p>
              <Coffee />
            </PinContainer>
          </a>
        </div>
      </div>
    </div>
  );
}
