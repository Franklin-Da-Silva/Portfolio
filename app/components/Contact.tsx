"use client";
import React from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";

const syne = Syne({ subsets: ["latin"] });

const sections = ["home", "work", "about", "contact"];

// NA THIS ONE GO TOO GOOD 😉
export default function Contact() {
  const { sectionInView, setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  const sections = ["home", "work", "about", "contact"];

  //  FINDING THE SECTION AND SETTING THE PREVIOUS ONE
  const previousSection = sections[sections.indexOf("contact") - 1];

  inView ? setSectionInView("contact") : setSectionInView(sectionInView);

  return (
    <div
      ref={ref}
      id="contact"
      className={` ${syne.className} mt-[100px] px-6 py-12 flex justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      <h2 className="text-[40px] font-bold">GOT A PROJECT IN MIND?</h2>
      <button className="text-2xl font-semibold px-3 py-2 rounded-xl border-2 border-white duration-300 hover:bg-white hover:text-[#08233b]">
        CONTACT ME
      </button>
    </div>
  );
}
