import Container from "@/src/components/layout/Container";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import Title from "@/src/components/shared/Title";
import { Button } from "@nextui-org/button";
// import ResumePdf from "../../../assets/Resume.pdf";

const AboutMe = () => {
  //setting the title
  const title = {
    mainTitle: "About Me",
  };

  const style = {
    backgroundImage:
      "linear-gradient(to right bottom, #8080f1, #997bec, #af76e6, #c371de, #d46cd5, #e76ac5, #f66cb5, #ff70a5, #ff8091, #ff9382, #ffa77b, #f8bb7e)",
  };

  return (
    <Container>
      <div className="h-fit flex flex-col md:flex-row justify-center items-center gap-6 py-10 my-10">
        <div className="w-full md:w-1/2 h-full px-10">
          <div className="flex justify-center items-center text-heading-text-color rounded-full relative border-l">
            <Link
              href="/contact"
              style={style}
              className="p-3 text-white text-base border-none rounded-xl absolute left-0 translate-y-[-70px] md:translate-y-[-80px] lg:translate-y-[-100px]"
            >
              <i className="fa-solid fa-envelope" />
            </Link>
            <Link
              href="https://github.com/nhasan97"
              style={style}
              className="p-3 text-white text-base border-none rounded-xl absolute left-0 translate-x-[-50%]"
            >
              <i className="fa-brands fa-github" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nazia-hasan2024/"
              style={style}
              className="p-3 text-white text-base border-none rounded-xl absolute left-0 translate-y-[70px] md:translate-y-[80px] lg:translate-y-[100px]"
            >
              <i className="fa-brands fa-linkedin-in" />
            </Link>

            <Image
              removeWrapper
              src="/assets/images/logo.png"
              alt="profile picture"
              className="w-full lg:w-3/4 rounded-full border-4 border-[#0a0b29]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full lg:p-6 rounded-lg space-y-6">
          <Title title={title} align={"l"} />

          <p className="text-[#c4c6d3] font-light text-justify leading-7">
            Aiming to leverage my skills to develop efficient & scalable web
            applications. Eager to learn and adapt to new technologies &
            challenges in order to create impactful software solutions.
            Enthusiastic about Frontend or UI/UX development.
          </p>
          <Link
            href="https://drive.google.com/file/d/1Ihjl1L5oGUG-0fSd9Wdah7g0TyWrBDh-/view?usp=sharing"
            download="Nazia's Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              style={style}
              className="text-lg text-white outline-none border-none"
            >
              <i className="fa-solid fa-download" /> Resume
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
