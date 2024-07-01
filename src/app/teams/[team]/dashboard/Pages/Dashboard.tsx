"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, MoveUp, Share, Clipboard } from "lucide-react";
import { toast } from "sonner";
const stats = [
  { name: "Mall of America", rate: 75 },
  { name: "Haunted", rate: 75.5 },
  { name: "Sugar Rush", rate: 73.5 },
  { name: "State Championship", rate: 85.4 },
  { name: "Vex Worlds 2025", rate: 100.0 },
];
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function showDialog() {}
export default function Dashboard({ data }: any) {
  return (
    <div className="w-full font-thin overflow-x-hidden py-12 dark">
      <div className="flex justify-center items-center w-full h-[35%]">
        <h1 className="text-white text-center text-7xl hover:text-primary duration-500 m-12 font-normal">
          {data.team.number} {" - "} {data.team.team_name}
        </h1>
        <Button
          variant="link"
          className="h-[1vh] text-white hover:text-primary duration-500"
          onClick={() => {
            toast("Copied to Clipboard!", {
              style: {
                backgroundColor: "#141414",
                color: "white",
                borderColor: "#FFA500",
              },
            });
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <Share size={48} />
        </Button>
      </div>

      <BentoGrid className="text-white max-w-7xl">
        <Card className="col-span-3 row-span-2 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader className="">
            <div className="w-full flex">
              <div className="w-[50%]">
                <CardTitle>Skills</CardTitle>
              </div>
              <div className="w-[50%] flex justify-end dark">
                <Button
                  variant="link"
                  className="h-[1vh] text-white hover:text-primary duration-500"
                  onClick={() =>
                    toast("This feature is currently in development...", {
                      description:
                        "The ability to export to CSV will be added soon.",
                      style: {
                        backgroundColor: "#141414",
                        color: "white",
                        borderColor: "#FFA500",
                      },
                    })
                  }
                >
                  <Download size={24} />
                </Button>
              </div>
            </div>
            <CardDescription>
              Shows {data.team.team_name}&apos;s skills over each competition.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart
              data={stats}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              width={1200}
              height={500}
            >
              <Line type="monotone" dataKey="rate" stroke="#FFA500" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
        <Card className="col-span-2 row-span-1 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader> 
            <CardTitle>Average AWP</CardTitle>
            <CardDescription>
              Average AWP rate for {data.team.team_name}.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center m-6">
            <div className="w-full items-center justify-center h-max flex">
              <MoveUp size={64} className="text-green-700" />
              <h1 className="text-7xl text-green-700 text-center font-normal">
                100.0%
              </h1>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader>
            <CardTitle>Win Rate (%)</CardTitle>
            <CardDescription>
              The average win rate for {data.team.team_name}.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center m-6">
            <div className="w-full items-center justify-center h-max flex">
              <MoveUp size={64} className="text-green-700" />
              <h1 className="text-7xl text-green-700 text-center font-normal">
                100.0%
              </h1>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 row-span-1 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader>
            <CardTitle>OPR</CardTitle>
            <CardDescription>Offensive Power Rating.</CardDescription>
          </CardHeader>
          <CardContent className="text-center m-6">
            <div className="w-full items-center justify-center h-max flex">
              <MoveUp size={64} className="text-green-700" />
              <h1 className="text-7xl text-green-700 text-center font-normal">
                100.0
              </h1>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader>
            <CardTitle>DPR</CardTitle>
            <CardDescription>Defensive Power Rating.</CardDescription>
          </CardHeader>
          <CardContent className="text-center m-6">
            <div className="w-full items-center justify-center h-max flex">
              <MoveUp size={64} className="text-green-700" />
              <h1 className="text-7xl text-green-700 text-center font-normal">
                100.0
              </h1>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 hover:scale-105 duration-200 hover:shadow-2xl shadow-black hover:border-primary">
          <CardHeader>
            <CardTitle>CCWM</CardTitle>
            <CardDescription>
              Contribution to winning margin. OPR minus DPR.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center m-6">
            <div className="w-full items-center justify-center h-max flex">
              <MoveUp size={64} className="text-green-700" />
              <h1 className="text-7xl text-green-700 text-center font-normal">
                100.0
              </h1>
            </div>
          </CardContent>
        </Card>
      </BentoGrid>
    </div>
  );
}
function generateSkillsData({ data }: any) {
  // TODO: Generate data
  // Go through all events and pull the skills score for the current team then store it in an array
  const skillsData = data.team.events.map((event: any) => {
    return {
      name: event.name,
      rate: event.score.skills,
    };
  });
  return [skillsData, false]; // First value is the data and the second is if the data is positive or negative
  // Positive meaning it's a good stat and negative meaning it's a bad stat.
}

/*export default function Dashboard({ data }: any) {
  return (
    <div>
      <h1 className="text-white text-center text-7xl hover:text-primary duration-500">
        {data.team.number}
      </h1>
      <p className="text-white text-center text-xl hover:text-primary duration-500">
        {data.team.team_name}
      </p>
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid rows-span-2 grid-cols-2 max-sm:grid-cols-1">
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">Win Rate:</span>{" "}
                <span className="text-green-500">{"100.0%"}</span>
              </CardTitle>
              <CardDescription>(Wins / # of matches) / 100</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart width={500} height={300} data={stats}>
                <Line type="monotone" dataKey="rate" stroke="#f97316" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip wrapperClassName="text-gray-500" />
              </LineChart>
            </CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">Skills</span>{" "}
                <span className="text-green-500">{"254"}</span>
              </CardTitle>
              <CardDescription>Skills Scores</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart width={500} height={300} data={stats}>
                <Line type="monotone" dataKey="rate" stroke="#f97316" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip wrapperClassName="text-gray-500" />
              </LineChart>
            </CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">OPR: </span>{" "}
                <span className="text-green-500">{"254"}</span>
              </CardTitle>
              <CardDescription>Offensive Power Rating</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">DPR: </span>{" "}
                <span className="text-green-500">{"254"}</span>
              </CardTitle>
              <CardDescription>Defensive Power Rating</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">Record</span>{" "}
                <span className="text-green-500">{"100-0-0"}</span>
              </CardTitle>
              <CardDescription>Wins - Ties - Losses</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">AWP: </span>{" "}
                <span className="text-green-500">{"99.9%"}</span>
              </CardTitle>
              <CardDescription>Autonomous Win Point</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="bg-[#202020] text-white border-primary duration-500 hover:border-orange-700 m-2 col-span-2 text-center">
            <CardHeader>
              <CardTitle>
                <span className="text-gray-300">Total Score: </span>{" "}
                <span className="text-green-500">{"254"}</span>
              </CardTitle>
              <CardDescription>Write some equation here (%)</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
*/
