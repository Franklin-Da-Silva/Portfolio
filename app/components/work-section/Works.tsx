import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Santander",
      liveLink: "https://santander.com.br/",
      about:
        "Brazilian subsidiary of the Spanish Santander Group, headquartered in São Paulo. The bank offers a comprehensive range of financial products and services tailored for individuals, small and medium enterprises, and corporate clients.",
      stack: ["angular", "typescript", "material-ui", "mongodb", "postgresql"],
      img: "/santander.png",
    },
    {
      title: "Solutudo",
      liveLink: "https://solutudo.com.br/",
      about:
        "A comprehensive platform in Brazil that serves as a bridge between the population and local businesses, offering a wide range of services to facilitate daily life. Mainly focused on SEO optimization, user experience and frontend performance.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/solutudo.png",
    },
    {
      title: "TAGME",
      liveLink: "https://tagme.org/",
      about:
        "Dedicated to promoting excellence in the management of graduate medical education (GME) training programs through certification. While security is critical, mainly focused on user authentication, certification processing, and content management.",
      stack: ["react", "react-router", "django", "mongodb", "cloud service"],
      img: "/tagme.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
