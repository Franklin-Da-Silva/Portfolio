import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in creating strong business solutions that aid
            business growth. Whether it&apos;s a website to boost brand
            publicity or software solutions that streamline otherwise manual
            processes, I love taking brands from point A to the their dreamy
            point B and iteratively improve as time goes on.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            From writing my first lines of code in mid-2017 to now, I have
            continuously refined my development skills—not only tackling complex
            real-world challenges but also seeking opportunities to push my
            limits through creative problem-solving and calculated risks to
            maximize my potential.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own.
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), TypeScript, React.js, Next.js, Angular, Vue.js,
              Nuxt.js
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Bootstrap, Tailwind CSS, Material UI, Clean UI,
              Ant Design,
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, PHP, Java, Node.js, Nest.js, Express.js, Django, Flask,
              FastAPI, Laravel, Spring Framework, Redis
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
