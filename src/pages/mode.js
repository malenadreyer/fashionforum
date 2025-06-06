// vores mode side
"use client";
import Footer from "@/components/Footer";
import Undermenu from "@/components/Undermenu";
import Cards from "@/components/Card";
import { useState } from "react";
import News from "@/components/NewsLetter";
import MidtSlide from "@/components/MidtSlide";
import MostReads from "@/components/MostReads";
import Design from "../components/Design";
import JobCards from "@/components/JobCard";
import Knap1 from "@/components/Knap1";
import Head from "next/head";

export default function Mode() {
  // state til at holde øje med hvilket tag der er valgt i undermenuen
  const [selectedTag, setSelectedTag] = useState("Alle artikler");

  return (
    <>
      <Head>
        <title>Mode – Fashion Forum</title>
        <meta name="description" content="Dyk ned i de seneste modenyheder, tendenser og brancheanalyser fra den danske og internationale modeverden." />
      </Head>
      <div className=" lg:ml-[120px]  lg:mr-[170px]">
        <Undermenu activeTag={selectedTag} onChange={setSelectedTag} />
        <Design color="#FFFED9" height="350px" position="20%" />
        <MidtSlide categori="Mode" minId={15} maxId={18} bgColor="#FFFED9" />
        <h2 className="p-5 pt-10 pb-10 ">Seneste nyheder</h2>
        <Cards categori="Mode" minId={15} maxId={21} selectedTag={selectedTag} />
        <div className="mb-20">
          <JobCards jobtype="Mode" minId={1} maxId={4} designColor="#fffed9" />
          <Knap1 text="Se alle" link="/jobportal" />
        </div>
        <MostReads minId={22} maxId={27} />
        <h2 className="pt-50 p-5 pb-10 ">Flere mode nyheder</h2>
        <Cards categori="Mode" minId={28} maxId={30} selectedTag={selectedTag} />
        <News />
        <Footer />
      </div>
    </>
  );
}
