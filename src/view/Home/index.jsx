import React from 'react';
import HeroComponent from '@/view/Home/components/HeroComponent';
import Stories from '@/view/Home/components/Stories';
import Pricing from '@/view/Home/components/Pricing';

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <hr className="divider my-6" />
      
      <Stories />
      <hr className="divider my-6" />

      <Pricing />
      <hr className="divider my-6" />

    </div>
  );
}

export default Home;
