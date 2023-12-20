import React from 'react';
import { useParams } from 'react-router-dom';
import './TeamMemberDetail.css'; // Import the CSS file
const normalizeString = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\W_]+/g, "").toLowerCase();
};

const TeamMemberDetail = ({ teamMembers }) => {
  const { memberName } = useParams();

  const member = teamMembers.find(m =>
    normalizeString(m.name) === normalizeString(memberName)
  );

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="container">
      <h1>{member.name}</h1>
      <img src={member.image} alt={member.name} />
      <p>
        <a href={member.linkedin} style={{fontSize: '22px'}} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p> Hi, I am a software engineer with experience in C++, React, and SQL.</p>
    </div>
  );
};

export default TeamMemberDetail;
