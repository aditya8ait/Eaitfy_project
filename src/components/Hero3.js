import React, { useState } from 'react';

const VideoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Define your video data with titles and YouTube links
  const videos = [
    { title: 'Tab 1', link: 'https://www.youtube.com/watch?v=KSX4cwWRzis' },
    { title: 'Tab 2', link: 'https://www.youtube.com/watch?v=tI1jF98hlmM' },
    { title: 'Tab 3', link: 'https://www.youtube.com/watch?v=XSdM5QB-Z20' },
    { title: 'Tab 4', link: 'https://www.youtube.com/watch?v=GCO6LxV1uiE' }
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 justify-center">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? 'border-b-2 border-blue-500'
                : 'border-b border-transparent'
            } py-4 px-6 focus:outline-none`}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* Video Player */}
      <div className="mt-4">
        <iframe
          title="Embedded Video"
          className="w-full h-96"
          src={videos[activeTab].link}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoTabs;