import styled from "styled-components";
import { Cards } from "../../components";
import { HeroParallax } from "./components/HeroParallax";
import { PROJECTS } from "../../lib/data";

export function Projects() {
  return (
    <HeroParallax projects={PROJECTS}>
      <div className="max-w-7xl relative mx-auto py-20 xl:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white">Projects</h1>
        <p className="max-w-2xl text-xs md:text-xl mt-8 dark:text-neutral-200">
          Welcome to my project page!
          <br />
          Here you'll find a selection of my most recent and notable work.
          <br />
          Take a look around and let me know what you think.
          <br />
        </p>
      </div>
    </HeroParallax>
  );
}
