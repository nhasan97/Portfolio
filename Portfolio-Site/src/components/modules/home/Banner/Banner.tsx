import Container from "@/src/components/layout/Container";
import "./Banner.css";
// import ResumePdf from "../../../../public/";
import Marquee from "react-fast-marquee";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const Banner = () => {
  const style = {
    backgroundImage:
      "linear-gradient(to right bottom, #8080f1, #997bec, #af76e6, #c371de, #d46cd5, #e76ac5, #f66cb5, #ff70a5, #ff8091, #ff9382, #ffa77b, #f8bb7e)",
  };

  return (
    <Container>
      <div className="">
        <div className="text-center text-heading-text-color space-y-4 py-28">
          <h4 className="text-xl md:text-2xl">Hi, I am</h4>
          <h1 className="text-4xl md:text-8xl text-gradient-animation">
            Nazia Hasan
          </h1>
          <h2 className="text-2xl md:text-4xl">Junior Web Developer</h2>
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

        <Marquee pauseOnHover={false} className="overflow-hidden">
          <h1 className="text-[#ffffff10] text-4xl md:text-9xl">
            WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT WEB DEVELOPMENT
          </h1>
        </Marquee>
      </div>
    </Container>
  );
};

export default Banner;
