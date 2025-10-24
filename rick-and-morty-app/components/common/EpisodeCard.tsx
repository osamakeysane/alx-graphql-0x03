import React from "react";
import { EpisodeCardProps } from "@/interfaces";

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  id,
  name,
  air_date,
  episode,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Air Date: {air_date}</p>
      <p>Episode: {episode}</p>
    </div>
  );
};

export default EpisodeCard;
