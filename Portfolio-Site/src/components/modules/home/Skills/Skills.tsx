import {
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import SkillCard from "./SkillCard";
import Container from "@/src/components/layout/Container";
import Title from "@/src/components/shared/Title";

const Skills = () => {
  //setting the title
  const title = {
    mainTitle: "Skills",
    subTitle1: "Skills",
    subTitle2: "Skills List",
  };

  return (
    <Container>
      <div className="h-fit py-10 my-10">
        <Title title={title} align={"m"}></Title>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-10">
          <SkillCard
            icon={<SiHtml5 className="text-6xl text-[#8080f1]"></SiHtml5>}
            skill={"HTML"}
            style={"col-span-1 md:col-span-2"}
          ></SkillCard>

          <SkillCard
            icon={<SiCss3 className="text-6xl text-[#997bec]"></SiCss3>}
            skill={"CSS"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>

          <SkillCard
            icon={
              <SiJavascript className="text-6xl text-[#af76e6]"></SiJavascript>
            }
            skill={"Javascript"}
            style={"col-span-1 md:col-span-2"}
          ></SkillCard>

          <SkillCard
            icon={<SiReact className="text-6xl text-[#d46cd5]"></SiReact>}
            skill={"React"}
            style={"col-span-1 md:col-span-3"}
          ></SkillCard>

          <SkillCard
            icon={
              <SiNodedotjs className="text-6xl text-[#e76ac5]"></SiNodedotjs>
            }
            skill={"Node.js"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>

          <SkillCard
            icon={<SiMongodb className="text-6xl text-[#ff70a5]"></SiMongodb>}
            skill={"mongoDB"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>

          <SkillCard
            icon={<SiExpress className="text-6xl text-[#ff8091]"></SiExpress>}
            skill={"Express"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>

          <SkillCard
            icon={
              <SiTailwindcss className="text-6xl text-[#ff9382]"></SiTailwindcss>
            }
            skill={"Tailwind CSS"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>

          <SkillCard
            icon={<SiFigma className="text-6xl text-[#ffa77b]"></SiFigma>}
            skill={"Figma"}
            style={"col-span-1 md:col-span-2"}
          ></SkillCard>

          <SkillCard
            icon={<SiFirebase className="text-6xl text-[#f8bb7e]"></SiFirebase>}
            skill={"Firebase"}
            style={"col-span-1 md:col-span-1"}
          ></SkillCard>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
