import React from "react";
import CustomButton from "@/components/commom/CustomButton";

const AdCard = ({ title }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4">
      <CustomButton background={"bg-black"} className="w-full py-2">
        Join the community
      </CustomButton>

      <h4 className="text-2xl font-bold p-4">{title}</h4>

      <p className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis libero a nisl fermentum, eget fermentum nulla scelerisque.
      </p>

      <CustomButton background={"bg-red-500"} className="w-full my-1">
        Learn More
      </CustomButton>

      <CustomButton background={"bg-red-500"} className="w-full">
        Buy Now
      </CustomButton>
    </div>
  );
};

export default AdCard;
