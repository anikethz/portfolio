'use client'
import HomeHero from "@/components/homepage/home-hero";
import Projects from "@/components/homepage/projects";
import WhoAmI from "@/components/homepage/who-am-i";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HomePage Hero Section */}
      <Navbar/>   
      <HomeHero/>
      <Projects/>  
    </div>
  );
}
