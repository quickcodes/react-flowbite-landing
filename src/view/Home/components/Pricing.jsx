import React from "react";
import { PricingPlans } from "@/constants/PricingPlans";
import PricingCard from "@/view/Home/components/PricingCard";

const Pricing = () => {

  return (
    <div className="py-12 px-3">
      <div className="container mx-auto text-center">
        <h4 className="font-bold mb-2 flowbite-heading">
          Unlock access to everything and join our fantastic supporters.
        </h4>

        <h2 className="font-bold mb-2 flowbite-heading text-gray-500">
          Its just $6 per month.
        </h2>

        <div className="flex justify-center gap-6">
            {PricingPlans?.map((item)=> {
                return(
                    <PricingCard plan={item}/>
                )
            })}
        </div>

      </div>
    </div>
  );
};

export default Pricing;
