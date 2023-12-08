import React from 'react';
import './styles.css';
import kazi from './kazi.png'
import george from './george.png'
import david from './david.png'
import rahat from './rahat.png'

const Team = () => {
  const teamMembers = [
    { name: 'George Sucuzhañay', image: george, linkedin: 'https://www.linkedin.com/in/georgesucuzhanay/' },
    { name: 'Kazi Anwar', image: kazi, linkedin: 'https://www.linkedin.com/in/kazi/' },
    { name: 'Rahat Khandokar', image: rahat, linkedin: 'https://www.linkedin.com/in/rahatkhandokar/' },
    { name: 'David Abushlaih', image: david, linkedin: 'https://www.linkedin.com/in/david-abushlaih/' },
  ];

  return (
    <div className="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      ))}
    </div>
  );
};

export default Team;