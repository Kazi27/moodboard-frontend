import React from 'react';
import { useParams } from 'react-router-dom';

const normalizeString = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\W_]+/g,"").toLowerCase();
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
    <div>
      <h2>{member.name}</h2>
      <img src={member.image} alt={member.name} />
      <p><a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
  );
};

export default TeamMemberDetail;
