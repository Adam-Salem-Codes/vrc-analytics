import { NextResponse } from "next/server";
import * as robotevents from "robotevents";

robotevents.authentication.setBearer(
  "you thought I would actually expose my API token?"
);

export async function GET(request: Request) {
  const program = "V5RC";
  const number = request.url.slice(request.url.lastIndexOf("/") + 1);
  const team = await robotevents.teams.get(number, program);
  if (!team) {
    console.log(`Could not find ${team} in ${program}`);
    return NextResponse.json({ team: null, events: null, matches: null });
  }

  const events = await team.events({
    season: [robotevents.seasons.get(program, "2023-2024")!],
  });

  const ids = events.array().map((e) => e.id);
  
  const matches = await team.matches({ event: ids });
  const outcomes = matches.group((match) => match.teamOutcome(team.number));
 
  return NextResponse.json({ team: team, events: events, matches: matches });
}

export async function POST() {}
