import React from "react";

const Frontend = () => {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Scss", level: "Intermediate" },
    { name: "Socket io", level: "Intermediate" },
    { name: "Typescript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Next js", level: "Intermediate" },
    { name: "Styled C.", level: "Intermediate" },
    { name: "Github", level: "Intermediate" },
    { name: "GraphQL", level: "Intermediate" },
    { name: "MaterialUI", level: "Intermediate" },
    { name: "Redux/Toolkit", level: "Intermediate" },
    { name: "React Native ", level: "Intermediate" },
  ];

  // 2'ye bölmek için slice
  const middleIndex = Math.ceil(frontendSkills.length / 2);
  const firstColumn = frontendSkills.slice(0, middleIndex);
  const secondColumn = frontendSkills.slice(middleIndex);

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
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">{renderSkillGroup(firstColumn)}</div>
        <div className="skills__group">{renderSkillGroup(secondColumn)}</div>
      </div>
    </div>
  );
};

export default Frontend;
