import React from 'react';
import { Link } from 'react-router-dom';

// Import team members' images
import kazi from './kazi.png';
import george from './george.png';
import david from './david.png';
import rahat from './rahat.png';

// Helper function to normalize names for URL matching
const normalizeString = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\W_]+/g,"").toLowerCase();
};

const Team = () => {
  const teamMembers = [
    { name: 'George Sucuzhañay', 
    image: george, 
    linkedin: 'https://www.linkedin.com/in/georgesucuzhanay/', 
    description: 'Hi, I am a software engineer and data engineer with experience in C++, React, and SQL. I enjoy calisthenics, jogging, and spending time in nature.'
    },

    { name: 'Kazi Anwar', 
    image: kazi, 
    linkedin: 'https://www.linkedin.com/in/kazi/' ,
    description: 'Hi, I am a software engineer and data engineer with experience in C++, React, and SQL. I enjoy calisthenics, jogging, and spending time in nature.'
    },

    { name: 'Rahat Khandokar',
     image: rahat, 
     linkedin: 'https://www.linkedin.com/in/rahatkhandokar/',
     description: 'Hi, I am a software engineer and data engineer with experience in C++, React, and SQL. I enjoy calisthenics, jogging, and spending time in nature.'
    },

    { name: 'David Abushlaih', 
    image: david,
    linkedin: 'https://www.linkedin.com/in/david-abushlaih/',
    description: 'Hi, I am a software engineer and data engineer with experience in C++, React, and SQL. I enjoy calisthenics, jogging, and spending time in nature.'
    }
  ];

  return (
    <div className="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <Link to={`/team/${normalizeString(member.name)}`}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            
          </Link>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      ))}
    </div>
  );
};

export default Team;
