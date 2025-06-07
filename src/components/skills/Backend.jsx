import React from "react";

const Backend = () => {
  const backendSkills = [
    { name: "Node.js", level: "Beginner" },

    { name: "Express.js", level: "Beginner" },

    { name: "MongoDB", level: "Beginner" },
    { name: "JWT / Auth", level: "Beginner" },

    { name: "Mongoose", level: "Beginner" },
    { name: "Docker", level: "Beginner" },

    { name: "REST API", level: "Beginner" },
    { name: "Admin Panel", level: "Beginner" },

  ];

  const middleIndex = Math.ceil(backendSkills.length / 2);
  const firstColumn = backendSkills.slice(0, middleIndex);
  const secondColumn = backendSkills.slice(middleIndex);

  const renderSkillGroup = (skills) =>
    skills.map((skill, index) => (
      <div className="skills__data" key={index}>
        <i className="bx bx-badge-check"></i>
        <div>
          <h3 className="skills__name">{skill.name}</h3>
          {/* <span className="skills__level">{skill.level}</span> */}
        </div>
      </div>
    ));

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkillGroup(firstColumn)}</div>
        <div className="skills__group">{renderSkillGroup(secondColumn)}</div>
      </div>
    </div>
  );
};

export default Backend;
