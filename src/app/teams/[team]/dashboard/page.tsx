"use client";
import { useState, useEffect, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "./Pages/Dashboard";
import Events from "./Pages/Events";
import Awards from "./Pages/Awards";

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Content tab</p>
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Random tab</p>
      </div>
    ),
  },
];
export default function Page() {
  const [loading, setLoading] = useState(true); // change to true after debugging
  const [data, setData] = useState<any>(null);
  const hasFetchedData = useRef(false); // change to false after debugging
  useEffect(() => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;
    setLoading(true);
    console.log("/api/" + window.location.href.split("/")[4]);
    (async function () {
      await fetch("/api/" + window.location.href.split("/")[4], {
        headers: {
          method: "GET",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        });
    })();
  }, []);
  return (
    <>
      {hasFetchedData.current ? (
        <main className="w-full bg-[#141414] dark">
          <Dashboard data={data} />
        </main>
      ) : (
        <div className="w-full h-[100vh] bg-[#141414] flex flex-col justify-center items-center">
          <LoaderCircle size={40} className="text-primary animate-spin" />
          <p className="text-white text-2xl">Fetching data...</p>
        </div>
      )}
    </>
  );
}

function get_highest_qualification() {
  return "test";
}

function get_win_rate(data: any) {}

/*            <div className="flex flex-col items-center w-[20vw] h-[15vh] justify-center">
              <h1 className="text-7xl text-primary m-2">{"2072A"}</h1>
              <p className="text-gray-500">
                Highest Qualification:{" "}
                <span className="text-primary">{"Worlds"}</span>
              </p>
            </div>*/
