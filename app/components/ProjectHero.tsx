import React from 'react';
const ProjectHero = () => {
  return (
    <div className='max-w-[1640projectHerox] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-cyan-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-cyan-500'>Websites</span> Delivered
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='/images/linus-mimietz-gvptKmonylk-unsplash.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};
export default ProjectHero;