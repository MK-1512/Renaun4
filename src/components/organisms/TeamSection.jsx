import React from "react";
import { SectionHeader } from "../molecules/SectionHeader";
import { TeamMemberCard } from "../molecules/TeamMemberCard";
import { teamData } from "../../data/teamData";

export const TeamSection = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#fbfde9] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          badge="Team"
          title="Meet the Team"
          subtitle="The people behind your growth"
          className="mb-14 sm:mb-20"
        />

        {/* 6 Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {teamData.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
