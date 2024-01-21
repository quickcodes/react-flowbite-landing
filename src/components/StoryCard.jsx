import React from "react";
import { Card } from "flowbite-react";

const StoryCard = ({ imageUrl, title }) => {
  return (
    <Card className="max-w-sm rounded-none border-none">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-32 md:h-48 rounded-none" // Add the custom class here
      />
      <h6 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h6>
    </Card>
  );
};

export default StoryCard;
