import React from "react";
import CustomCard from "@/components/StoryCard"; // You may need to import your card component
// import CustomAdBox from "@/components/commom/CustomAdBox"; // You may need to import your ad box component
import StoriesData from "@/constants/StoriesData";
import AdCard from "@/components/AdCard";

const Stories = () => {

  return (
    <div className="py-12 px-3">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 flowbite-heading">
          Discover Exciting Features
        </h2>
        <h6 className="text-lg text-gray-500 mb-6">
          Explore the latest and greatest features for your needs.
        </h6>

        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Card Box 1 */}
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
              {/* Cards */}
              {StoriesData.map((item, index) => (
                <CustomCard key={index} title={item.title} imageUrl={item.url} />
              ))}
            </div>
          </div>

          {/* Ad Box 2 */}
          <div className="col-span-1">
            <div className="grid grid-rows-2 gap-6">
              <AdCard title="To know everything about shopify" />
              {/* <CustomAdBox title="Ad 2" /> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stories;
