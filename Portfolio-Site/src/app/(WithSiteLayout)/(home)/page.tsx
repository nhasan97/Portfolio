import Banner from "@/src/components/modules/home/Banner/Banner";
import AboutMe from "@/src/components/modules/home/AboutMe/AboutMe";
import Services from "@/src/components/modules/home/Services/Services";
import Skills from "@/src/components/modules/home/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Services />
      <Skills />
      {/*<Projects></Projects> */}
    </div>
  );
}
