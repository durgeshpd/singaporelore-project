import React from 'react';

const AwardsPanelCard = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white border border-gray-600 rounded-lg shadow-md transition-all duration-300 hover:border-coral hover:shadow-lg"
    >
      {icon && <span className="mr-3 text-2xl text-gray-800">{icon}</span>}
      <h3 className="font-playfairDisplay text-xl text-gray-800">{title}</h3>
    </a>
  );
};

const AwardsPanels = () => {
  return (
    <div className="mt-8 mb-8 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <AwardsPanelCard
        title="Vote with RankedVote"
        link="https://www.rankedvote.co/"
        icon="🗳️"
      />
      <AwardsPanelCard
        title="Explore Global Voting Platform"
        link="https://globalvotingplatform.com/"
        icon="✨"
      />
    </div>
  );
};

export default AwardsPanels;
