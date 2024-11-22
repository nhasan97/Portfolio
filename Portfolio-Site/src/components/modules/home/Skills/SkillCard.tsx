import { ReactNode } from "react";

const SkillCard = ({
  icon,
  skill,
  style,
}: {
  icon: ReactNode;
  skill: string;
  style: string;
}) => {
  return (
    <div
      className={`w-full bg-[#0a0b29] ${style} flex flex-col justify-center items-center gap-3 p-6 rounded-xl`}
    >
      {icon}
      <h3 className="text-[#c4c6d3] text-lg font-medium">{skill}</h3>
    </div>
  );
};

export default SkillCard;
