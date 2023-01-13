import React from "react";
import TeamMoodCard from "./common/TeamMoodCard";

function TeamMoodContainer() {
  const teamMoodDetails = [
    {
      name: "Andrea",
      profile: "UX Junior",
    },
    {
      name: "Alvaro",
      profile: "Back end Developer",
    },
    {
      name: "Juan",
      profile: "UX Senior",
    },
    {
      name: "Jose",
      profile: "Marketing",
    },
    {
      name: "Maria",
      profile: "UX Junior",
    },
  ];

  return (
    <div className="flex flex-col mr-6 gap-3 bg-white p-2">
      <div className="flex text-xl">
        <span>Team Mood</span>
      </div>
      <div className="flex flex-col gap-2">
        {teamMoodDetails.map((moodDetail) => (
          <TeamMoodCard name={moodDetail.name} profile={moodDetail.profile} />
        ))}
      </div>
    </div>
  );
}

export default TeamMoodContainer;
