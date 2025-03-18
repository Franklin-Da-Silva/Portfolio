"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/tivit.jpeg",
    jobTitle: "Full-Stack Developer",
    company: "TIVIT",
    jobType: "Full-time",
    duration: "Mar. 2023 - Feb. 2025",
    stuffIDid: [
      "Led front-end development efforts using latest version of React.js and Next.js.",
      "Created scalable and reusable UI components using ES6+, enhancing developer productivity by enabling faster iterations on features, ultimately leading to a 10% reduction in development time across projects.",
      "Designed and improved data models using MongoDB, Mongoose and Redis, stored application data creating robust data schemas which reduced data retrieval times by 25%",
      "Developed AI-driven features for applications using TensorFlow and PyTorch for model training, including integration of OpenAI API for NLP-based features.",
      "Integrated cloud services (AWS, Azure, GCP) for deployment, orchestration, and storage, ensuring 99.9% uptime.",
      "Employed Agile methodologies to continuously improve development processes and delivered incremental value.",
    ],
  },
  {
    companyImg: "/destakdigital.png",
    jobTitle: "Junior Full-Stack Developer",
    company: "Destak Digital",
    jobType: "Full-time",
    duration: "Feb. 2021 - Nov. 2022",
    stuffIDid: [
      "Developed scalable and modular UI components using Angular, ensuring performance optimization with lazy loading and OnPush change detection.",
      "Built and maintained robust server-side logic using Django, ensuring a high level of data integrity and consistency across multiple applications.",
      "I also integrated the ACID compliance of PostgreSQL with the scalability of MongoDB, significantly improving project performance and scalability.",
      "Gained hands-on experience with in-real project development, especially with Angular and Django.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
