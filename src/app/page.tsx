import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Experience/> */}
      <h2 className="text-4xl font-bold mb-2 text-center">
        Featured Projects
      </h2>
      <Projects/>
    </div>
  );
}
