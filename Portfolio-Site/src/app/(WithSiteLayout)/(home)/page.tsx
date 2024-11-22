import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
import Banner from "@/src/components/modules/home/Banner/Banner";
import AboutMe from "@/src/components/modules/home/AboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      {/* <Services></Services>
      <Skills></Skills>
      <Projects></Projects> */}
    </div>
  );
}
